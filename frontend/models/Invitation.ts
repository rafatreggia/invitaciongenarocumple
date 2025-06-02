import mongoose, { Schema } from "mongoose";

const invitationSchema = new mongoose.Schema({
  nombreInvitado: { type: String, required: true },
  nombrePareja: { type: String, required: false },
  vegano: { type: Boolean, required: true },
  vegetariano: { type: Boolean, required: true },
  celiaco: { type: Boolean, required: true },
  invitadosExtra: { type: [String], required: true, default: [] },
  tieneInvitadosExtra: { type: Boolean, required: true },
  confirmacion: { type: Boolean, required: true },
  motivoDeFalta: { type: String, required: false },
  comentario: { type: String, required: false, default:"Sin Comentario"  }
});

const Invitation =
  mongoose.models?.Invitation || mongoose.model("Invitation", invitationSchema);

export default Invitation;
