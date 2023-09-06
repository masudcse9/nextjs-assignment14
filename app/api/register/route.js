import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { TokenCookies } from "@/utility/TokenCookies";
import { cookies } from "next/headers";
import nodemailer from "nodemailer";

export async function POST(req, res) {
  const jsonParams = await req.json();
  let name = jsonParams["name"];
  let email = jsonParams["email"];
  let password = jsonParams["password"];

  if (name == "" || email == "" || password == "") {
    return NextResponse.json({ message: "All fields required." });
  } else {
    //let Cookie = await TokenCookies(email);

    const Transporter = nodemailer.createTransport({
      service:"gmail",
      auth: {
        user: "masudcse9@gmail.com",
        pass: "nroywdjwsdqhnggj",
      },
    });

    const myEmail = {
      form: "masudcse9@gmail.com",
      to: email,
      subject: "Successfully email sent by nodemailer",
      text: "Test email",
    };

    try {
      await Transporter.sendMail(myEmail);

      const cookieStore = cookies();
      cookieStore.set("email", email, {
        httpOnly: true,
      });
      
      cookieStore.set("password", password, {
        httpOnly: true,
      });

      return NextResponse.json({
        status: true,
        message: "Successfully registered"
      });
    } catch (e) {
      return NextResponse.json({ msg: "Fail" });
    }
  }
}
