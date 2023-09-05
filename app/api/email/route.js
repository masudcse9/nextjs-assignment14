import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import nodemailer from "nodemailer";

export async function GET(req, res) {
  const { searchParams } = new URL(req.url);
  const toEmail = searchParams.get("email");

  let Transporter = nodemailer.createTransport({
    host: "mail.teamrabbil.com",
    port: 25,
    secure: false,
    auth: {
      user: "info@teamrabbil.com",
      pass: "~sR4[bhaC[Qs",
    },
    tls: { rejectUnauthorized: false },
  });

  let myEmail = {
    form: "abc@teamrabbil.com",
    to: toEmail,
    subject: "Test Email from Nodemailer",
    text: "Test email"
  };

  try {
    await Transporter.sendMail(myEmail);
    return NextResponse.json({ msg: "Success" });
  } catch (e) {
    return NextResponse.json({ msg: "Fail" });
  }

  //return NextResponse.json({message:"GET",toEmail})
}
