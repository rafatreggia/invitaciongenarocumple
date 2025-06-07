"use client";
import { useEffect, useState } from "react";
import { poppins } from "../fonts";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { CheckCircle, CircleX } from "lucide-react";

import type { Invitation } from "@/lib/types";
import { getAllInvitation } from "../actions/confirmation";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Label, PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";
import {
  type ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A radial chart with stacked sections";
const chartData = [
  {
    confirmados: 0,
    restantes: 0,
  },
];

const chartConfig = {
  confirmados: {
    label: "Confirmados",
    color: "hsl(142, 76%, 36%)", // Verde para confirmados
  },
  restantes: {
    label: "Restantes",
    color: "hsl(210, 40%, 85%)", // Gris claro para restantes
  },
} satisfies ChartConfig;

const Page = () => {
  const [invitaciones, setInvitaciones] = useState<Invitation[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);

  const router = useRouter();

  const handleSerch = async () => {
    setLoading(true);
    const response = await getAllInvitation();
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

  const getTotalInvitados = () => {
    let contador = 0;
    invitaciones.map((invitacion, index) => {
      if (invitacion.confirmacion === true) {
        contador += 1;
        if (invitacion.nombrePareja != "") {
          contador += 1;
        }
        contador += invitacion.invitadosExtra.length;
      }
    });
    return contador;
  };

  const soloConfirmados = () => {
    const invitacionesConfirmadas = invitaciones.filter(
      (invitacion: Invitation) => invitacion.confirmacion === true
    );
    setInvitaciones(invitacionesConfirmadas);
  };

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
          <div className="p-4 flex items-center justify-between">
            <h1 className="text-[30px] font-semibold">
              Total de Invitados:{" "}
              <span className="font-bold text-blue-600">
                {getTotalInvitados()}
              </span>
            </h1>

            <div className="flex gap-4">
              <Button onClick={soloConfirmados} className="bg-green-500">
                Ocutar Ausentes
              </Button>
              <Button onClick={handleSerch} className="bg-blue-600">
                Mostrar Todos
              </Button>
            </div>
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            {" "}
            <ChartContainer
              config={chartConfig}
              className="mx-auto h-[200px] w-full max-w-[250px]"
            >
              <RadialBarChart
                data={[
                  {
                    confirmados: getTotalInvitados(),
                    restantes: Math.max(0, 110 - getTotalInvitados()),
                  },
                ]}
                endAngle={180}
                innerRadius={80}
                outerRadius={130}
              >
                <ChartTooltip
                  cursor={false}
                  content={<ChartTooltipContent hideLabel />}
                />
                <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
                  <Label
                    content={({ viewBox }) => {
                      if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                        return (
                          <text
                            x={viewBox.cx}
                            y={viewBox.cy}
                            textAnchor="middle"
                          >
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) - 16}
                              className="fill-foreground text-2xl font-bold"
                            >
                              {getTotalInvitados().toLocaleString()}
                            </tspan>
                            <tspan
                              x={viewBox.cx}
                              y={(viewBox.cy || 0) + 4}
                              className="fill-muted-foreground"
                            >
                              de 110
                            </tspan>
                          </text>
                        );
                      }
                    }}
                  />
                </PolarRadiusAxis>
                <RadialBar
                  dataKey="confirmados"
                  stackId="a"
                  cornerRadius={5}
                  fill="var(--color-confirmados)"
                  className="stroke-transparent stroke-2"
                />
                <RadialBar
                  dataKey="restantes"
                  fill="var(--color-restantes)"
                  stackId="a"
                  cornerRadius={5}
                  className="stroke-transparent stroke-2"
                />
              </RadialBarChart>
            </ChartContainer>
            <div className="flex justify-center gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-green-600"></div>
                <span>Confirmados: {getTotalInvitados()}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gray-300"></div>
                <span>Restantes: {Math.max(0, 110 - getTotalInvitados())}</span>
              </div>
            </div>
          </div>
          <Table className="w-full px-6">
            <TableHeader>
              <TableRow className="bg-slate-50">
                <TableHead className="text-slate-700">Asistira</TableHead>
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
                    <TableCell>
                      {invitacion.confirmacion === true ? (
                        <CheckCircle className="text-green-500" />
                      ) : (
                        <CircleX className="text-red-600" />
                      )}
                    </TableCell>
                    <TableCell className="capitalize">{invitacion.nombreInvitado}</TableCell>
                    <TableCell className="capitalize">
                      {invitacion.nombrePareja ? (
                        invitacion.nombrePareja
                      ) : (
                        <CircleX className="text-red-600" />
                      )}
                    </TableCell>
                    <TableCell className="capitalize">
                      {invitacion.invitadosExtra.length === 0 ? (
                        <CircleX className="text-red-600" />
                      ) : (
                        invitacion.invitadosExtra.join(" / ")
                      )}
                    </TableCell>
                    <TableCell className="capitalize">
                      {invitacion.vegano && "Vegano"}
                      {invitacion.vegetariano && "  Vegetariano"}
                      {invitacion.celiaco && "  Celiaco"}
                      {!invitacion.vegano &&
                      !invitacion.vegetariano &&
                      !invitacion.celiaco ? (
                        <CircleX className="text-red-600" />
                      ) : (
                        ""
                      )}
                    </TableCell>
                    <TableCell>{invitacion.comentario}</TableCell>
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
