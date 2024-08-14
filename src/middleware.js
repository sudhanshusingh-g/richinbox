import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req){
  const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });
  const { pathname } = req.nextUrl;

  // If the user is not logged in and tries to access a protected route, redirect to home
  if (!token && pathname !== "/") {
    return NextResponse.redirect(new URL("/", req.url));
  }
  // If the user is logged in and tries to access the home page, redirect to the product page
  if(token && pathname == "/"){
    return NextResponse.redirect(new URL("/onebox",req.url));
  }

  return NextResponse.next();

}

export const config = {
  matcher: ["/onebox", "/another-protected-route", "/"],
};