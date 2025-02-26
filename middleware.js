import { NextResponse } from "next/server";

export function middleware(req) {

    const token = req.cookies.get("admin")?.value;
    const user = req.cookies.get("token")?.value;
   

    if (req.nextUrl.pathname.startsWith("/dashboard")) {
        if (!token) {
            
            return NextResponse.redirect(new URL("/admin", req.url));
        }
    }

    if (req.nextUrl.pathname.startsWith("/notes")) {
        if(!user){
            return NextResponse.redirect(new URL('/', req.url))
        }
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*", "/notes/:path*"],
};



