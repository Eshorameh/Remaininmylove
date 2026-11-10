import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get("riml_admin_session");

    if (!sessionCookie) {
        return NextResponse.json(
            { message: "Not authenticated." },
            { status: 401 }
        );
    }

    const apiBaseUrl = process.env.RIML_API_BASE_URL;

    if (!apiBaseUrl) {
        return NextResponse.json(
            { message: "Backend API configuration is missing." },
            { status: 500 }
        );
    }

    try {
        const backendResponse = await fetch(
            `${apiBaseUrl.replace(/\/$/, "")}/api/v1/admin/me`,
            {
                method: "GET",
                headers: {
                    Cookie: `riml_admin_session=${sessionCookie.value}`,
                },
                cache: "no-store",
            }
        );

        const responseText = await backendResponse.text();

        let responseData: unknown;

        try {
            responseData = JSON.parse(responseText);
        } catch {
            responseData = {
                message: "The backend returned an invalid response.",
            };
        }

        return NextResponse.json(responseData, {
            status: backendResponse.status,
            headers: {
                "Cache-Control": "no-store",
            },
        });
    } catch {
        return NextResponse.json(
            { message: "Unable to verify the admin session." },
            { status: 502 }
        );
    }
}
