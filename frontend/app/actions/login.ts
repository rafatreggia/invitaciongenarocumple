"use server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function login(password: string) {
  try {
    if (password != "rafa1234") {
      return null;
    }
    const token = jwt.sign({ name: "rafa" }, process.env.JWT_SECRET as string, {
      expiresIn: "30d",
    });
    cookies().set("token", token, {})
    return true
  } catch (error) {}
}
