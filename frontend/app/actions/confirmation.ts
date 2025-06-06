"use server";

import connectMongoDb from "@/lib/mongoDb";
import { Invitation as IInvitation } from "@/lib/types";
import Invitation from "@/models/Invitation";
import { cookies } from "next/headers";
import jwt, { JsonWebTokenError } from "jsonwebtoken";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
const createInvitation = async (invitacion: IInvitation) => {
  try {
    await connectMongoDb();
    let newInvitation = await Invitation.create(invitacion);
    let response = convertToPlainObject(newInvitation);
    let response2 = await fetch(`${baseUrl}/api/send`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(invitacion),
    });
    if (response2.ok === false) {
      console.log(response2);
      throw new Error("Los datos no se han enviado");
    }
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};

const getAllInvitation = async () => {
  try {
    const token = cookies().get("token")?.value;
    console.log(token);
    if (!token) {
      return { ok: false, redirect: true };
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
    await connectMongoDb();
    const invitations = await Invitation.find()
    const formaterInvitation = convertToPlainObject(invitations);
    console.log(decoded);
    return { ok: true, data: formaterInvitation };
  } catch (error: any) {
    console.log(error);
    if (error.name === "JsonWebTokenError") {
      return { ok: false, redirect: true };
    }
    return { ok: false };
  }
};


function convertToPlainObject(obj: any): any {
  return JSON.parse(JSON.stringify(obj));
}
export { createInvitation, getAllInvitation };
