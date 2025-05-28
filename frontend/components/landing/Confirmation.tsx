"use client";
import { Invitation } from "@/lib/types";
import React, { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";

const saleEndDate = new Date("2025-08-25T23:59:59");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

const Confirmation = () => {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false,
  });
  const [invitacion, setInvitacion] = useState<Invitation>({
    nombreInvitado: "",
    nombrePareja: "",
    vegano: false,
    vegetariano: false,
    celiaco: false,
    invitadosExtra: [],
    tieneInvitadosExtra: false,
    confirmacion: false,
    motivoDeFalta: "",
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = saleEndDate.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true,
        });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
        isExpired: false,
      });
    };

    // Calculate immediately and then every second
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div
      id="confirm"
      className="myScreen py-20 flex flex-col items-center justify-center gap-8 text-white"
    >
      <h1 className="myTextGradient text-center font-pacifico text-[40px] xl:text-[56px] mb-4">
        Confirma Tu Asistencia
      </h1>

      {!timeLeft.isExpired ? (
        <div className="flex flex-col items-center gap-6 animate-fade-in">
          <div className="flex items-center gap-6 rounded-2xl bg-white/10 px-10 py-6 shadow-lg backdrop-blur-sm">
            {timeLeft.days > 0 && (
              <div className="flex flex-col items-center">
                <span className="text-5xl font-bold">{timeLeft.days}</span>
                <span className="text-lg text-white/70">Días</span>
              </div>
            )}
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold">
                {timeLeft.hours.toString().padStart(2, "0")}
              </span>
              <span className="text-lg text-white/70">Horas</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold">
                {timeLeft.minutes.toString().padStart(2, "0")}
              </span>
              <span className="text-lg text-white/70">Min</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-bold">
                {timeLeft.seconds.toString().padStart(2, "0")}
              </span>
              <span className="text-lg text-white/70">Seg</span>
            </div>
          </div>
          <span className="text-xl md:text-2xl font-medium text-white">
            para confirmar
          </span>
        </div>
      ) : (
        <div className="bg-red-600 text-white text-2xl px-8 py-5 rounded-xl font-semibold text-center shadow animate-fade-in">
          ⏰ ¡El tiempo para confirmar ha expirado!
        </div>
      )}
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-sm rounded-2xl px-10 py-6 shadow-lg"
      >
        <Label>Nombre Invitado</Label>
        <Input
          className="input-blanco"
          value={invitacion.nombreInvitado}
          placeholder="Ingrese Su Nombre"
        ></Input>
        <Label> Nombre Pareja</Label>
        <Input
          className="input-blanco"
          value={invitacion.nombrePareja}
          placeholder="Nombre de Su Pareja"
        ></Input>
      </form>
    </div>
  );
};

export default Confirmation;
