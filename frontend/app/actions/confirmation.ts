"use server";

import connectMongoDb from "@/lib/mongoDb";
import { Invitation as IInvitation } from "@/lib/types";
import Invitation from "@/models/Invitation";

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
      console.log(response2)
      throw new Error("Los datos no se han enviado");
    }
    return response;
  } catch (error) {
    console.log(error);
    return null;
  }
};

function convertToPlainObject(obj: any): any {
  return JSON.parse(JSON.stringify(obj));
}
export { createInvitation };
