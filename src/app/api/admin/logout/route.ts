import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    // Reject cross-origin logout requests.
    const origin = request.headers.get("origin");

    if (origin && origin !== request.nextUrl.origin) {
        return NextResponse.json(
            { message: "Invalid request origin." },
            { status: 403 }
        );
    }

    const cookieStore = await cookies();
    const sessionCookie = cookieStore.get("riml_admin_session");

    const clearSessionCookie = (response: NextResponse) => {
        response.cookies.set({
            name: "riml_admin_session",
            value: "",
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 0,
        });

        return response;
    };

    if (!sessionCookie) {
        return clearSessionCookie(
            NextResponse.json({
                message: "Logout successful.",
            })
        );
    }

    const apiBaseUrl = process.env.RIML_API_BASE_URL;

    if (!apiBaseUrl) {
        return clearSessionCookie(
            NextResponse.json(
                { message: "Backend API configuration is missing." },
                { status: 500 }
            )
        );
    }

    try {
        const backendResponse = await fetch(
            `${apiBaseUrl.replace(/\/$/, "")}/api/v1/admin/logout`,
            {
                method: "POST",
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

        const response = NextResponse.json(responseData, {
            status: backendResponse.status,
            headers: {
                "Cache-Control": "no-store",
            },
        });

        return clearSessionCookie(response);
    } catch {
        return clearSessionCookie(
            NextResponse.json(
                { message: "Unable to contact the authentication server." },
                { status: 502 }
            )
        );
    }
}
