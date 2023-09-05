import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { TokenCookies } from "@/utility/TokenCookies";

export async function POST(req, res) {
  const jsonParams = await req.json();
  let email = jsonParams["email"];
  let password = jsonParams["password"];

  if (email === "masudcse9@gmail.com" && password === "12345") {
    let Cookie = await TokenCookies(email);

    return NextResponse.json(
      { status: true, message: "Login Success" },
      { status: 200, headers: Cookie }
    );
  } else {
    return NextResponse.json({ message: "Fail" });
  }
}

export async function GET(req, res) {
  cookies.delete("token");
  return NextResponse.json({
    status: true,
    message: "Logout Success",
  });
}
