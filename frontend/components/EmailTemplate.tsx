import React from "react";
import { Invitation } from "@/lib/types";

const EmailTemplate = (invitacion: Invitation) => {
  const {
    nombreInvitado,
    nombrePareja,
    vegano,
    vegetariano,
    celiaco,
    invitadosExtra,
    tieneInvitadosExtra,
    confirmacion,
    motivoDeFalta,
    comentario,
  } = invitacion;

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        fontSize: "16px",
        color: "#333",
        padding: "20px",
        border: "1px solid #eee",
        borderRadius: "8px",
        maxWidth: "600px",
        margin: "0 auto",
        backgroundColor: "#fafafa",
      }}
    >
      <h2 style={{ color: "#222" }}>Confirmación de asistencia</h2>

      <p>
        <strong>Invitado:</strong> {nombreInvitado}
      </p>

      {nombrePareja && (
        <p>
          <strong>Pareja:</strong> {nombrePareja}
        </p>
      )}

      <p>
        <strong>¿Asiste?:</strong>{" "}
        {confirmacion ? "Sí" : "No"}
      </p>

      {!confirmacion && motivoDeFalta && (
        <p>
          <strong>Motivo de la falta:</strong> {motivoDeFalta}
        </p>
      )}

      <p>
        <strong>Preferencias alimenticias:</strong>
      </p>
      <ul>
        {vegano && <li>Vegano</li>}
        {vegetariano && <li>Vegetariano</li>}
        {celiaco && <li>Celíaco</li>}
        {!vegano && !vegetariano && !celiaco && <li>Ninguna</li>}
      </ul>

      {tieneInvitadosExtra && (
        <div>
          <p>
            <strong>Invitados extra:</strong>
          </p>
          <ul>
            {invitadosExtra.map((extra, index) => (
              <li key={index}>{extra}</li>
            ))}
          </ul>
        </div>
      )}

      {comentario && (
        <p>
          <strong>Comentario:</strong> {comentario}
        </p>
      )}
    </div>
  );
};

export default EmailTemplate;

