import { SignJWT, jwtDecrypt, jwtVerify } from "jose";

export async function CreateToken(email) {
  const secretKey = new TextEncoder().encode(process.env.jWT_SECRET);
  let token = await new SignJWT({ email: email }) // details to  encode in the token
    .setProtectedHeader({ alg: "HS256" }) // algorithm
    .setIssuedAt()
    .setIssuer(process.env.JWT_ISSUER) // issuer
    .setExpirationTime(process.env.JWT_EXPIRATION_TIME) // token expiration time, e.g., "1 day"
    .sign(secretKey); // secretKey generated from previous step

  return token;
}

export async function VerifyToken(token) {
  const secretKey = new TextEncoder().encode(process.env.jWT_SECRET);
  const decoded = await jwtVerify(token, secretKey);

  return decoded["payload"];
}
