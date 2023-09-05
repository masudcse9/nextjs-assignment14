import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { TokenCookies } from "@/utility/TokenCookies";
import {cookies} from "next/headers";

export async function POST(req, res) {
  const jsonParams = await req.json();
  let name = jsonParams["name"];
  let email = jsonParams["email"];
  let password = jsonParams["password"];

  if (name == "" || email == "" || password == "") {
    return NextResponse.json({ message: "All fields required." });
  } else {
    let Cookie = await TokenCookies(email);

    return NextResponse.json({
      status: true,
      message: "Successfully registered",
      headers: Cookie,
    });
  }
}
