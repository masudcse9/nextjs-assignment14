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

    let OTP = 112233;
    
    const myEmail = {
      form: "masudcse9@gmail.com",
      to: email,
      subject: "OTP Verification",
      html: '<p>Your OTP Code is : <b>' + OTP + '</b> <br /> Click <a href="http://localhost:3000/otp/">here</a> to verify it.</p>'
      // text: '<p>Click <a href="http://localhost:3000/otp/">here</a> to verify your OTP</p>',
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

      cookieStore.set("otp", OTP, {
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
