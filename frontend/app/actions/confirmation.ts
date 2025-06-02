"use server";

import connectMongoDb from "@/lib/mongoDb";
import { Invitation as IInvitation } from "@/lib/types";
import Invitation from "@/models/Invitation";

const createInvitation = async (invitacion: IInvitation) => {
  try {
    await connectMongoDb();
    let newInvitation = await Invitation.create(invitacion);
    let response = convertToPlainObject(newInvitation);
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
