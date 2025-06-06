"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import { poppins } from "../fonts";
import { Button } from "@/components/ui/button";
import { login } from "../actions/login";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const Page = () => {
  const [password, setPassword] = useState<string>("");
  let router = useRouter()

  const handleClick = async () => {
    let response = await login(password);
    if (!response) {

      toast("Contraseña Incorrecta");
      return
    }
  router.push("/dashboard")
    toast("Redireccion...")
  };
  return (
    <div
      className={`${poppins.className} min-h-screen flex items-center justify-center bg-gradient-to-br from-myColors-lightGreen to-myColors-green`}
    >
      <div className="bg-myColors-green/70 backdrop-blur-md p-8 rounded-2xl shadow-xl w-[90%] max-w-md">
        <Label className="text-white text-sm mb-2 block">Contraseña</Label>
        <Input
          type="password"
          value={password}
          placeholder="Ingrese su Contraseña"
          onChange={(e) => setPassword(e.target.value)}
          className="input-blanco w-full"
        />
        <Button className="bg-myColors-green mt-5" onClick={handleClick}>
          Ingresar
        </Button>
      </div>
    </div>
  );
};

export default Page;
