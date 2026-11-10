import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    // Reject cross-origin login requests.
    const origin = request.headers.get("origin");

    if (origin && origin !== request.nextUrl.origin) {
        return NextResponse.json(
            { message: "Invalid request origin." },
            { status: 403 }
        );
    }

    let body: { email?: unknown; password?: unknown };

    try {
        body = await request.json();
    } catch {
        return NextResponse.json(
            { message: "Invalid request body." },
            { status: 400 }
        );
    }

    if (
        typeof body.email !== "string" ||
        typeof body.password !== "string" ||
        !body.email.trim() ||
        !body.password
    ) {
        return NextResponse.json(
            { message: "Email and password are required." },
            { status: 400 }
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
            `${apiBaseUrl.replace(/\/$/, "")}/api/v1/admin/login`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: body.email.trim(),
                    password: body.password,
                }),
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

        if (!backendResponse.ok) {
            return NextResponse.json(responseData, {
                status: backendResponse.status,
            });
        }

        // The backend must issue its HttpOnly session cookie.
        const setCookieHeader = backendResponse.headers.get("set-cookie");
        const cookieMatch = setCookieHeader?.match(
            /(?:^|,\s*)riml_admin_session=([^;,\s]+)/
        );

        if (!cookieMatch) {
            return NextResponse.json(
                { message: "The backend did not issue an admin session." },
                { status: 502 }
            );
        }

        const response = NextResponse.json(responseData, {
            status: backendResponse.status,
        });

        response.cookies.set({
            name: "riml_admin_session",
            value: cookieMatch[1],
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            path: "/",
            maxAge: 60 * 60 * 24 * 7,
        });

        return response;
    } catch {
        return NextResponse.json(
            { message: "Unable to connect to the authentication server." },
            { status: 502 }
        );
    }
}
