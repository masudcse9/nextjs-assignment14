import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { TokenCookies } from "@/utility/TokenCookies";

export async function POST(req, res) {
  const jsonParams = await req.json();
  let otp = jsonParams["otp"];

  const cookieStore = cookies();
  const cookieEmail = cookieStore.get('email')['value'];
  const cookieOTP = cookieStore.get('otp')['value'];

  //return NextResponse.json({ cookieOTP });

  if (otp === cookieOTP) {
    let Cookie = await TokenCookies(cookieEmail);

    return NextResponse.json(
      { status: true, message: "Login Success" },
      { status: 200, headers: Cookie }
    );
  } else {
    return NextResponse.json({ message: "Oops! wrong OTP." });
  }
}

