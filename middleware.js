import { NextResponse } from "next/server";


export function middleware(NextRequest) {

    const token = NextRequest.cookies.get("accessToken")?.value;
    
   
    if (NextRequest.nextUrl.pathname.startsWith("/dashboard")) {
        if (!token) {
            
            return NextResponse.redirect(new URL("/", NextRequest.url));
        }
    }


    if (NextRequest.nextUrl.pathname.startsWith("/profile")){
        if(!token){
            return NextResponse.redirect(new URL("/",  NextRequest.url))
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ["/dashboard/:path*",  "/profile/:path*"],
};



