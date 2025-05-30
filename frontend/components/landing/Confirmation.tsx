"use client";
import { Invitation } from "@/lib/types";
import React, { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { Frown } from "lucide-react";
import { Textarea } from "../ui/textarea";

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
    comentario: "",
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
    console.log(invitacion);
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
        <div className="flex flex-col items-center gap-6 animate-fade-in w-full">
          <div className="flex items-center gap-6 rounded-2xl bg-white/10 px-10 py-6 shadow-lg backdrop-blur-sm sm:w-[390px] w-full justify-center">
            {timeLeft.days > 0 && (
              <div className="flex flex-col items-center">
                <span className="text-3xl md:text-5xl font-bold">
                  {timeLeft.days}
                </span>
                <span className="text-lg text-white/70">Días</span>
              </div>
            )}
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-5xl font-bold">
                {timeLeft.hours.toString().padStart(2, "0")}
              </span>
              <span className="text-lg text-white/70">Horas</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-5xl font-bold">
                {timeLeft.minutes.toString().padStart(2, "0")}
              </span>
              <span className="text-lg text-white/70">Min</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-3xl md:text-5xl font-bold">
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
        className="bg-white/10 backdrop-blur-sm rounded-2xl px-10 py-6 shadow-lg flex flex-col sm:w-[390px] wfull"
      >
        <Label>Nombre Invitado</Label>
        <Input
          required
          onChange={(e) => {
            setInvitacion({ ...invitacion, nombreInvitado: e.target.value });
          }}
          className="input-blanco mb-4 mt-1"
          value={invitacion.nombreInvitado}
          placeholder="Ingrese Su Nombre"
        ></Input>
        <Label> Nombre Pareja</Label>
        <Input
          onChange={(e) => {
            setInvitacion({ ...invitacion, nombrePareja: e.target.value });
          }}
          className="input-blanco mb-4 mt-1"
          value={invitacion.nombrePareja}
          placeholder="Nombre de Su Pareja"
        ></Input>
        <div className="flex items-center gap-3">
          <Checkbox
            onCheckedChange={(e: any) => {
              const copiaInvitacion = { ...invitacion, tieneInvitadosExtra: e };
              if (e === true) {
                copiaInvitacion.invitadosExtra = [""];
              } else {
                copiaInvitacion.invitadosExtra = [];
              }
              setInvitacion(copiaInvitacion);
            }}
            checked={invitacion.tieneInvitadosExtra}
            id="terms"
            className=" border border-gray-300 data-[state=checked]:bg-white data-[state=checked]:text-black"
          />
          <Label htmlFor="terms">Tiene mas Invitados</Label>
        </div>
        {invitacion.tieneInvitadosExtra === true && (
          <div className="mt-3">
            <button
              type="button"
              className="mt-2 px-4 py-2 bg-myColors-green hover:bg-myColors-lightGreen hover:text-myColors-green text-white rounded-xl shadow transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 mb-5"
              onClick={() => {
                let copiaInvitacion = { ...invitacion };
                copiaInvitacion.invitadosExtra.push("");
                setInvitacion(copiaInvitacion);
              }}
            >
              Agregar Invitados
            </button>
            {invitacion.invitadosExtra.map((invitado, index) => {
              return (
                <div key={index}>
                  <Label> Invitado {index + 1}</Label>
                  <Input
                    required
                    onChange={(e) => {
                      const copiaInvitacion = { ...invitacion };
                      copiaInvitacion.invitadosExtra[index] = e.target.value;
                      setInvitacion(copiaInvitacion);
                    }}
                    className="input-blanco mb-4 mt-1"
                    value={invitacion.invitadosExtra[index]}
                    placeholder="Ingrese Nombre"
                  ></Input>
                </div>
              );
            })}
          </div>
        )}
        <div className="mt-5">
          <Label>¿Posees Restriccion Alimentaria?</Label>
          <div className="flex items-center gap-3 mt-2">
            <Checkbox
              onCheckedChange={(e: any) => {
                setInvitacion({ ...invitacion, vegano: e });
              }}
              checked={invitacion.vegano}
              id="vegano"
              className=" border border-gray-300 data-[state=checked]:bg-white data-[state=checked]:text-black"
            />
            <Label htmlFor="vegano">Vegano</Label>
          </div>

          <div className="flex items-center gap-3 mt-2">
            <Checkbox
              onCheckedChange={(e: any) => {
                setInvitacion({ ...invitacion, vegetariano: e });
              }}
              checked={invitacion.vegetariano}
              id="vegetariano"
              className=" border border-gray-300 data-[state=checked]:bg-white data-[state=checked]:text-black"
            />
            <Label htmlFor="vegetariano">Vegetariano</Label>
          </div>

          <div className="flex items-center gap-3 mt-2">
            <Checkbox
              onCheckedChange={(e: any) => {
                setInvitacion({ ...invitacion, celiaco: e });
              }}
              checked={invitacion.celiaco}
              id="celiaco"
              className=" border border-gray-300 data-[state=checked]:bg-white data-[state=checked]:text-black"
            />
            <Label htmlFor="celiaco">Celiaco</Label>
          </div>
        </div>
        <div className="mt-5">
          <Textarea placeholder="Ingrese un comentario"></Textarea>
        </div>
        <div className="mt-5 flex flex-col items-center justify-center">
          <Button
            type="submit"
            className="myButtonGradient text-myColors-green font-bold w-full "
          >
            SI ASISTIRE !
          </Button>
          <button
            onClick={() => {
              console.log("no asistire");
            }}
            className="mt-6 flex gap-2 "
          >
            No podre asistir <Frown></Frown>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Confirmation;
