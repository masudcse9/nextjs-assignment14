import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { CheckCookieAuth } from "./utility/MiddlewareUtility";

export async function middleware(req) {
  if (req.nextUrl.pathname.startsWith("/dashboard")) {
    return await CheckCookieAuth(req);
    //return NextResponse.json({msg:"I am middleware"})
  }
}
