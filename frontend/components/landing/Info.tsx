import React from "react";
import { ShimmerButton } from "@/components/magicui/shimmer-button";
import { Cake } from "lucide-react";

const Info = () => {
  return (
    <div className="myScreen  bg-white flex xl:flex-row  xl:justify-around flex-col justify-center items-center gap-20 xl:gap-0 py-20">
      <div className="text-myColors-green text-center max-w-[500px] flex flex-col items-center justify-center">
        <h1 className="myTextGradient font-pacifico text-[48px] xl:text-[56px] mb-4">
          Bautismo
        </h1>
        <h2 className="text-[22px] xl:text-[24px] font-bold mb-3">
          Capilla Nuestra Señora de la Salud
        </h2>
        <h2 className="text-[18px] xl:text-[20px] mb-[3px]">
          Fecha: Domingo 21/09/2025 - 12:00hs
        </h2>
        <h3 className="text-[16px] xl:text-[18px] mb-[3px]">
          Calle: Gabriel Alvarez de Toledo 6991
        </h3>
        <h3 className="text-[16px] xl:text-[18px] mb-[3px]">
          Barrio: Los Boulevares
        </h3>
        <h3 className="text-[16px] xl:text-[18px] mb-6">Córdoba - Argentina</h3>
        <a href="https://maps.app.goo.gl/V5MuCBWkaUXCuRFC8" target="_blank">
          <ShimmerButton background="#446656">
            <div className="flex items-center gap-2">
              Como Llegar
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M16.52 3v-.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5V3h-.5c-.28 0-.5.22-.5.5s.22.5.5.5h.5v2.082q-.211.072-.4.208l-5.89 4.2c-.22.16-.35.41-.35.68a.85.85 0 0 0 1.15.778v5.703L2.41 22.41c-.24.15-.38.4-.38.68h-.01v.11c0 .63.7 1.02 1.23.68l.78-.493v4.603h-.69c-.74 0-1.34.6-1.34 1.34v.66h2.03V30h24v-.01h2v-.66c0-.74-.6-1.34-1.34-1.34h-.66v-4.7l.77.48a.801.801 0 1 0 .85-1.36l-7.62-4.766v-5.696a.83.83 0 0 0 1.13-.778c0-.27-.13-.52-.35-.68l-5.89-4.2q-.189-.136-.4-.208V4h.5c.28 0 .5-.22.5-.5c0-.27-.23-.5-.5-.5zm1.51 12.142l-.61-.382c-.84-.53-1.91-.53-2.76 0l-.63.393V13c0-1.1.9-2 2-2s2 .9 2 2zm5.14 9.438v3.41h-3.16v-3.41c0-.87.71-1.58 1.58-1.58s1.58.71 1.58 1.58M18.03 22v5.99h-4V22c0-1.1.9-2 2-2s2 .9 2 2m-6.01 2.57v3.42H8.89v-3.42c0-.87.7-1.57 1.57-1.57s1.57.7 1.57 1.57z"
                />
              </svg>
            </div>
          </ShimmerButton>
        </a>
      </div>

      <div className="text-myColors-green text-center max-w-[500px] flex flex-col items-center justify-center">
        <h1 className="myTextGradient font-pacifico text-[48px] xl:text-[56px] mb-4 pb-3">
          Cumpleaños
        </h1>
        <h2 className="text-[22px] xl:text-[24px] font-bold mb-3">
          Country Chacras de la Villa
        </h2>
        <h2 className="text-[18px] xl:text-[20px] mb-[3px]">
          Fecha: Domingo 21/09/2025 - 14:00hs
        </h2>
        <h3 className="text-[16px] xl:text-[18px] mb-[3px]">
          Calle: Av. Padre Luchesse Km 1
        </h3>
        <h3 className="text-[16px] xl:text-[18px] mb-6">
          V. Allende - Córdoba - Argentina
        </h3>
        <a href="https://maps.app.goo.gl/GrmqTgqpt3SHnoEKA" target="_blank">
          <ShimmerButton background="#446656">
            <div className="flex items-center gap-2">
              Como Llegar
              <Cake />
            </div>
          </ShimmerButton>
        </a>
      </div>
    </div>
  );
};

export default Info;
