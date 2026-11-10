import { cookies } from "next/headers";

type RouteContext = {
  params: Promise<{ id: string }>;
};

async function forwardRequest(
  request: Request,
  context: RouteContext,
  method: "GET" | "PUT" | "DELETE",
) {
  const cookieStore = await cookies();
  const sessionCookie = cookieStore.get("riml_admin_session");

  if (!sessionCookie?.value) {
    return Response.json(
      { error: "Unauthorized. Please sign in again." },
      { status: 401 },
    );
  }

  const apiBaseUrl = process.env.RIML_API_BASE_URL;

  if (!apiBaseUrl) {
    return Response.json(
      { error: "The backend API URL is not configured." },
      { status: 500 },
    );
  }

  const { id } = await context.params;

  try {
    const headers = new Headers({
      Cookie: `riml_admin_session=${sessionCookie.value}`,
    });

    const options: RequestInit = {
      method,
      headers,
      cache: "no-store",
    };

    if (method === "PUT") {
      headers.set("Content-Type", "application/json");
      options.body = await request.text();
    }

    const backendResponse = await fetch(
      `${apiBaseUrl}/api/v1/admin/posts/${encodeURIComponent(id)}`,
      options,
    );

    const responseBody = await backendResponse.text();

    return new Response(responseBody, {
      status: backendResponse.status,
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "no-store",
      },
    });
  } catch {
    return Response.json(
      { error: "Unable to connect to the backend. Please try again." },
      {
        status: 502,
        headers: {
          "Cache-Control": "no-store",
        },
      },
    );
  }
}

export async function GET(request: Request, context: RouteContext) {
  return forwardRequest(request, context, "GET");
}

export async function PUT(request: Request, context: RouteContext) {
  return forwardRequest(request, context, "PUT");
}

export async function DELETE(request: Request, context: RouteContext) {
  return forwardRequest(request, context, "DELETE");
}
