"use client";
import React from "react";

const photos:any = []
const Page = () => {
  return (
    <div>
      <div className="min-h-screen bg-[#EAEFE9] text-[#446656]">
        <header className="text-center py-10">
          <h1 className="text-4xl font-bold">🎉 Genaro cumple 1 año 🎂</h1>
          <p className="mt-2 text-lg">
            ¡Mirá todas las fotos de su primer cumple!
          </p>
        </header>

        <main className="max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-20">
          {photos.length === 0 ? (
            <p className="col-span-full text-center text-xl">
              Las fotos estarán disponibles pronto 😊
            </p>
          ) : (
            photos.map((src:any, idx:any) => (
              <div
                key={idx}
                className="rounded-2xl overflow-hidden shadow-lg hover:scale-105 transition"
              >
                <img
                  src={src}
                  alt={`Genaro foto ${idx + 1}`}
                  className="w-full h-64 object-cover"
                />
              </div>
            ))
          )}
        </main>
      </div>
    </div>
  );
};

export default Page;
