import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { TokenCookies } from "@/utility/TokenCookies";

export async function POST(req, res) {
  const jsonParams = await req.json();
  let otp = jsonParams["otp"];

  const cookieStore = cookies();
  const result = cookieStore.getAll();
  const cookieEmail = result[0].value;
  const cookiePassword = result[1].value;
  const cookieOTP = result[2].value;

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

