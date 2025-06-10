"use client";
import React from "react";
import { QRCodeCanvas } from "qrcode.react";

const AlbumPhotos = () => {
  return (
    <div className="min-h-screen">
      
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
