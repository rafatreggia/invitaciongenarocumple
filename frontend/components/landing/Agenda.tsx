"use client";
import React from "react";
import { Button } from "../ui/button";
import { ShimmerButton } from "../magicui/shimmer-button";

const Agenda = () => {
  return (
    <div id="calendar" className="min-h-screen flex flex-col items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="60"
        height="60"
        viewBox="0 0 48 48"
      >
        <g fill="none" stroke-width="3">
          <path
            fill="#fff"
            d="M3.859 39.973c.315 2.196 1.993 3.851 4.192 4.144c3.13.418 8.38.899 15.949.899s12.818-.481 15.949-.899c2.199-.293 3.877-1.948 4.192-4.144c.408-2.844.859-7.368.859-13.457s-.451-10.614-.859-13.458c-.315-2.196-1.993-3.85-4.192-4.144c-3.13-.417-8.38-.898-15.949-.898s-12.818.48-15.949.898c-2.199.293-3.877 1.948-4.192 4.144C3.451 15.902 3 20.426 3 26.516s.451 10.613.859 13.457"
          />
          <path
            stroke="#446656"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M16 27.053L22.77 34L32 22"
          />
          <path
            stroke="#446656"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.003 8.578c-1.137.11-2.12.225-2.952.336c-2.199.293-3.877 1.948-4.192 4.144C3.451 15.902 3 20.427 3 26.516s.451 10.614.859 13.458c.315 2.196 1.993 3.85 4.192 4.144c3.13.417 8.38.898 15.949.898s12.818-.481 15.949-.898c2.199-.294 3.877-1.948 4.192-4.144c.408-2.844.859-7.369.859-13.458s-.451-10.614-.859-13.458c-.315-2.196-1.993-3.85-4.192-4.144a82 82 0 0 0-2.952-.336M29 8.09a164 164 0 0 0-5-.074q-2.693.002-5 .074"
          />
          <path
            fill="#EAEFE9"
            d="M11.013 9.27c.043 2.08 1.409 3.694 3.489 3.726a33 33 0 0 0 .996 0c2.08-.032 3.446-1.646 3.489-3.726a61 61 0 0 0 0-2.54c-.043-2.08-1.409-3.694-3.489-3.726a32 32 0 0 0-.996 0c-2.08.032-3.446 1.646-3.489 3.726a61 61 0 0 0 0 2.54m18 0c.043 2.08 1.409 3.694 3.489 3.726a33 33 0 0 0 .996 0c2.08-.032 3.446-1.646 3.489-3.726a61 61 0 0 0 0-2.54c-.043-2.08-1.409-3.694-3.489-3.726a32 32 0 0 0-.996 0c-2.08.032-3.446 1.646-3.489 3.726a61 61 0 0 0 0 2.54"
          />
          <path
            stroke="#446656"
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M11.013 9.27c.043 2.08 1.409 3.694 3.489 3.726a33 33 0 0 0 .996 0c2.08-.032 3.446-1.646 3.489-3.726a61 61 0 0 0 0-2.54c-.043-2.08-1.409-3.694-3.489-3.726a32 32 0 0 0-.996 0c-2.08.032-3.446 1.646-3.489 3.726a61 61 0 0 0 0 2.54m18 0c.043 2.08 1.409 3.694 3.489 3.726a33 33 0 0 0 .996 0c2.08-.032 3.446-1.646 3.489-3.726a61 61 0 0 0 0-2.54c-.043-2.08-1.409-3.694-3.489-3.726a32 32 0 0 0-.996 0c-2.08.032-3.446 1.646-3.489 3.726a61 61 0 0 0 0 2.54"
          />
        </g>
      </svg>
      <h1 className="myTextGradient text-center font-pacifico text-[32px] xl:text-[50px] mb-4 pb-4 mt-5">
        Agenda la Fecha
      </h1>
      <div className="flex flex-col items-center justify-center font-semibold">
        <h2>¡Guarda la fecha!</h2>
        <h2>En tu corazón y en el Calendario!</h2>
      </div>

      <ShimmerButton
        background="#446656"
        className="mt-10 px-10"
        onClick={() => {
          const title = encodeURIComponent("Cumple de Genaro 🎉");
          const details = encodeURIComponent(
            "¡Guardá esta fecha especial con nosotros!"
          );
          const location = encodeURIComponent(
            "SUM Chacras de la Villa, Villa Allende, Cordoba, Argentina"
          );
          const startDate = "20250921T150000Z"; // 12:00 ARG
          const endDate = "20250921T220000Z"; // 19:00 ARG

          const calendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${startDate}/${endDate}&details=${details}&location=${location}`;
          window.open(calendarUrl, "_blank");
        }}
      >
        Agendar
      </ShimmerButton>
    </div>
  );
};

export default Agenda;
