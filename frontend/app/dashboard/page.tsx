"use client";
import React, { useEffect, useState } from "react";
import { poppins } from "../fonts";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { CircleX, ClipboardPlus, Users } from "lucide-react";

import { Invitation } from "@/lib/types";
import { getAllInvitation } from "../actions/confirmation";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const Page = () => {
  const [invitaciones, setInvitaciones] = useState<Invitation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  let router = useRouter();

  const handleSerch = async () => {
    setLoading(true);
    let response = await getAllInvitation();
    console.log(response);
    if (!response.ok) {
      setLoading(false);
      if (response.redirect) {
        console.log("Manejar Redireccion");
        router.push("/login");
      }
      toast("Algo salio mal");

      setError(true);
      return;
    }
    setLoading(false);
    setInvitaciones(response.data);
  };
  useEffect(() => {
    handleSerch();
  }, []);
  if (loading) {
    return <div>Cargando Datos...</div>;
  }
  if (error) {
    return <div>Algo Salio Mal</div>;
  }

  return (
    <div
      className={`${poppins.className} min-h-screen bg-gradient-to-br from-myColors-lightGreen to-myColors-green`}
    >
      <div className="flex flex-col gap-2 xl:gap-4 p-5 xl:p-10">
        <h1 className="myTextGradient font-pacifico xl:text-[35px] text-[28px] leading-none xl:text-left text-center pb-[15px]">
          Cumpleaños Genaro
        </h1>
        <h2 className="xl:text-[16px] text-[16px] font-semibold text-myColors-green text-center xl:text-left">
          Base de Datos Invitados
        </h2>
      </div>
      <div className="lg:col-span-2 px-10">
        <div className="bg-white rounded-lg shadow-md border border-slate-200 overflow-hidden">
          <div className="p-6 border-b border-slate-200">
            <h2 className="text-xl font-semibold text-slate-800">
              Listado de Invitados
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Gestione los Invitados registrados en el sistema
            </p>
          </div>

          <Table className="w-full px-6">
            <TableCaption>Total de Invitados:</TableCaption>
            <TableHeader>
              <TableRow className="bg-slate-50">
                <TableHead className="text-slate-700">
                  Invitado Principal
                </TableHead>
                <TableHead className="text-slate-700">Pareja</TableHead>
                <TableHead className="text-slate-700">Acompañantes</TableHead>
                <TableHead className="text-slate-700">Reestriccion</TableHead>
                <TableHead className="text-slate-700 text-center">
                  Comentarios
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {invitaciones.map((invitacion, index) => {
                return (
                  <TableRow key={invitacion._id}>
                    <TableCell>{invitacion.nombreInvitado}</TableCell>
                    <TableCell>{invitacion.nombrePareja ? invitacion.nombrePareja : "---"}</TableCell>
                    <TableCell>{invitacion.invitadosExtra.length === 0 ? <CircleX className="text-red-600"/> : invitacion.invitadosExtra.join(" / ") }</TableCell>
                    <TableCell>{invitacion.vegano}</TableCell>
                    <TableCell>{invitacion.nombreInvitado}</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default Page;
