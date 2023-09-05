import { VerifyToken } from "./JWTHelper";
import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function CheckCookieAuth(req) {
  try {
    let token = req.cookies.get("token");
    let payload = await VerifyToken(token["value"]);

    const requestHeader = new Headers(req.headers);
    requestHeader.set("email", payload["email"]);

    return NextResponse.next({
      request: { headers: requestHeader },
    });
  } catch (e) {
    return NextResponse.redirect(new URL("/login", req.url));
  }
}
