import { cookies } from "next/headers";

export async function GET(request: Request) {
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

  const searchParams = new URL(request.url).searchParams.toString();
  const endpoint = `${apiBaseUrl}/api/v1/admin/comments${
    searchParams ? `?${searchParams}` : ""
  }`;

  try {
    const backendResponse = await fetch(endpoint, {
      method: "GET",
      headers: {
        Cookie: `riml_admin_session=${sessionCookie.value}`,
      },
      cache: "no-store",
    });

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