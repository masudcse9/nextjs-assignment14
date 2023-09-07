import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { cookies } from "next/headers";
import { TokenCookies } from "@/utility/TokenCookies";

export async function POST(req, res) {
  const jsonParams = await req.json();
  let email = jsonParams["email"];
  let password = jsonParams["password"];

  const cookieStore = cookies();
  const result = cookieStore.getAll();
  const cookieEmail = result[1].value;
  const cookiePassword = result[0].value;

  //return NextResponse.json({result,cookieEmail,cookiePassword})

  if (email === cookieEmail && password === cookiePassword) {
    let Cookie = await TokenCookies(email);

    return NextResponse.json(
      { status: true, message: "Login Success" },
      { status: 200, headers: Cookie }
    );
  } else {
    return NextResponse.json({ message: "Fail" });
  }
}

export async function GET() {
  cookies().delete('token')

  return NextResponse.json({
    status: true,
    message: "Logout Success",
  });

}
