"use client";
import { Invitation } from "@/lib/types";
import React, { useEffect, useRef, useState } from "react";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Checkbox } from "../ui/checkbox";
import { Button } from "../ui/button";
import { Frown } from "lucide-react";
import { Textarea } from "../ui/textarea";
import type { CheckedState } from "@radix-ui/react-checkbox";
import { createInvitation } from "@/app/actions/confirmation";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Confetti, { ConfettiRef } from "../ui/confetti";

const saleEndDate = new Date("2025-08-25T23:59:59");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  isExpired: boolean;
}

const Confirmation = () => {
  const confettiRef = useRef<ConfettiRef>(null);
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
    confirmacion: true,
    motivoDeFalta: "",
    comentario: "",
  });
  const [open, setOpen] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
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

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    console.log(invitacion);
    let response = await createInvitation(invitacion);
    if (!response) {
      toast("Hubo una Falla");
      setLoading(false);

      return;
    }
    confettiRef.current?.fire({});
    toast("Se envio la Invitacion Correctamente");
    setLoading(false);
  };

  const getMessage = async () => {
    setLoading(true);
    let addInvitation = { ...invitacion, confirmacion: false };
    if (!invitacion.nombreInvitado || !invitacion.comentario) {
      toast("Ingresa Tu Nombre y Comentario");
      setLoading(false);
      return;
    }
    let response = await createInvitation(addInvitation);
    if (!response) {
      toast("Hubo una Falla");
      setLoading(false);

      return;
    }
    toast("Nos vemos la Proxima");
    setOpen(false);
    setLoading(false);
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
          onChange={(e) =>
            setInvitacion({ ...invitacion, nombreInvitado: e.target.value })
          }
          className="input-blanco mb-4 mt-1"
          value={invitacion.nombreInvitado}
          placeholder="Ingrese Su Nombre"
        />

        <Label>Nombre Pareja</Label>
        <Input
          onChange={(e) =>
            setInvitacion({ ...invitacion, nombrePareja: e.target.value })
          }
          className="input-blanco mb-4 mt-1"
          value={invitacion.nombrePareja}
          placeholder="Nombre de Su Pareja"
        />

        <div className="flex items-center gap-3">
          <Checkbox
            onCheckedChange={(checked: CheckedState) => {
              const copiaInvitacion = {
                ...invitacion,
                tieneInvitadosExtra: checked === true,
              };
              copiaInvitacion.invitadosExtra = checked === true ? [""] : [];
              setInvitacion(copiaInvitacion);
            }}
            checked={invitacion.tieneInvitadosExtra}
            id="terms"
            className="border border-gray-300 data-[state=checked]:bg-white data-[state=checked]:text-black"
          />
          <Label htmlFor="terms">Tiene más Invitados</Label>
        </div>

        {invitacion.tieneInvitadosExtra && (
          <div className="mt-3">
            <button
              type="button"
              className="mt-2 px-4 py-2 bg-myColors-green hover:bg-myColors-lightGreen hover:text-myColors-green text-white rounded-xl shadow transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 mb-5"
              onClick={() => {
                const copiaInvitacion = { ...invitacion };
                copiaInvitacion.invitadosExtra.push("");
                setInvitacion(copiaInvitacion);
              }}
            >
              Agregar Invitados
            </button>

            {invitacion.invitadosExtra.map((invitado, index) => (
              <div key={index}>
                <Label>Invitado {index + 1}</Label>
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
                />
              </div>
            ))}
          </div>
        )}

        <div className="mt-5">
          <Label>¿Posees Restricción Alimentaria?</Label>

          <div className="flex items-center gap-3 mt-2">
            <Checkbox
              onCheckedChange={(checked: CheckedState) =>
                setInvitacion({ ...invitacion, vegano: checked === true })
              }
              checked={invitacion.vegano}
              id="vegano"
              className="border border-gray-300 data-[state=checked]:bg-white data-[state=checked]:text-black"
            />
            <Label htmlFor="vegano">Vegano</Label>
          </div>

          <div className="flex items-center gap-3 mt-2">
            <Checkbox
              onCheckedChange={(checked: CheckedState) =>
                setInvitacion({ ...invitacion, vegetariano: checked === true })
              }
              checked={invitacion.vegetariano}
              id="vegetariano"
              className="border border-gray-300 data-[state=checked]:bg-white data-[state=checked]:text-black"
            />
            <Label htmlFor="vegetariano">Vegetariano</Label>
          </div>

          <div className="flex items-center gap-3 mt-2">
            <Checkbox
              onCheckedChange={(checked: CheckedState) =>
                setInvitacion({ ...invitacion, celiaco: checked === true })
              }
              checked={invitacion.celiaco}
              id="celiaco"
              className="border border-gray-300 data-[state=checked]:bg-white data-[state=checked]:text-black"
            />
            <Label htmlFor="celiaco">Celiaco</Label>
          </div>
        </div>

        <div className="mt-5">
          <Textarea
            placeholder="Ingrese un comentario"
            value={invitacion.comentario}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setInvitacion({ ...invitacion, comentario: e.target.value })
            }
          />
        </div>

        <div className="mt-5 flex flex-col items-center justify-center">
          <Button
            disabled={loading}
            type="submit"
            className="myButtonGradient text-myColors-green font-bold w-full"
          >
            {loading === true ? "Enviando..." : "¡SI ASISTIRÉ!"}
          </Button>

          <button
            type="button"
            onClick={() => {
              setOpen(true);
            }}
            className="mt-6 flex gap-2"
          >
            No podré asistir <Frown />
          </button>
        </div>
      </form>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Ups!!! Que Lastima...</DialogTitle>
            <DialogDescription>
              No pasa nada, te estaremos enviando las fotos del evento, si
              queres dejanos un Mensaje para Genaro...
            </DialogDescription>
            <div>
              <Label>Nombre Invitado</Label>
              <Input
                required
                onChange={(e) =>
                  setInvitacion({
                    ...invitacion,
                    nombreInvitado: e.target.value,
                  })
                }
                className=" mb-4 mt-1"
                value={invitacion.nombreInvitado}
                placeholder="Ingrese Su Nombre"
              />
              <Label>Dejanos tu Mensaje</Label>
              <Textarea
                placeholder="Ingrese un comentario"
                value={invitacion.comentario}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                  setInvitacion({ ...invitacion, comentario: e.target.value })
                }
              />
              <div className="w-auto flex justify-end">
                <Button
                  disabled={loading}
                  className="bg-myColors-green mt-5 "
                  onClick={getMessage}
                >
                  {loading === true ? "Enviando..." : "Enviar"}
                </Button>
              </div>
            </div>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      <Confetti
        ref={confettiRef}
        className="fixed top-1/2 left-0 w-full h-[400px] -translate-y-1/2 pointer-events-none z-80"
      />
    </div>
  );
};

export default Confirmation;
