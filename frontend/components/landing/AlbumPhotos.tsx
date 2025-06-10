"use client";
import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const AlbumPhotos = () => {
  return (
    <div className="min-h-[100px] flex flex-col items-center justify-center gap-3 mb-6">
      
      <h1 className="myTextGradient text-center font-pacifico text-[32px] xl:text-[50px] mb-4 pb-4 mt-5">
        Album Del Bauti-Cumple
      </h1>
      <div className="flex flex-col items-center justify-center font-semibold">
        <h2 className="text-center">
          ¡Escanea el Qr!
          <br /> y accede al album de fotos del Evento
        </h2>
      </div>
      <QRCodeCanvas
        value={"https://invitaciongenarocumple.vercel.app/album"}
        size={200} // tamaño en píxeles
        bgColor="#ffffff"
        fgColor="#000000"
        level="H" // nivel de corrección de errores
        includeMargin={true}
      />
    </div>
  );
};

export default AlbumPhotos;
