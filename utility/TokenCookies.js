import { CreateToken } from "./JWTHelper";
import { cookies } from "next/headers";

export async function TokenCookies(email) {
    
  let token = await CreateToken(email);
  return {
    "Set-Cookie": `token=${token}; Max-Age=7200; Secure; HttpOnly; Path=/; SameSite=Strict`,
  };
}
