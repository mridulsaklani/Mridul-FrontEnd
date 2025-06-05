import { NextResponse } from "next/server";
import { NextRequest } from "next/server"; // you can still import for type info if needed

export function middleware(request) {
    const token = request.cookies.get("accessToken")?.value;
    const user = request.cookies.get("refreshToken")?.value;
    console.log('token',token)

    if (request.nextUrl.pathname.startsWith("/dashboard")) {
        if (!token) {
            return NextResponse.redirect(new URL("/admin", request.url));
        }
    }

    if (request.nextUrl.pathname.startsWith("/notes")) {
        if (!user) {
            return NextResponse.redirect(new URL("/", request.url));
        }
    }

    if (request.nextUrl.pathname.startsWith("/profile")) {
        if (!user) {
            return NextResponse.redirect(new URL("/", request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*", "/notes/:path*", "/profile/:path*"],
};

