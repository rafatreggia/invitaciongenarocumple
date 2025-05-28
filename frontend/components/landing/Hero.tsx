import React from "react";

const Hero = () => {
  return (
    <div className="myScreen min-h-[100vh] flex xl:flex-row xl:justify-around flex-col justify-center items-center gap-10 xl:gap-0">
      <div className="xl:pt-0 pt-28">
        {" "}
        <h2 className="xl:text-[48px] text-[32px] font-semibold text-myColors-green text-center xl:text-left">
          Bauti - Cumple
        </h2>
        <h1 className="myTextGradient font-pacifico xl:text-[128px] text-[80px] leading-none xl:pb-20 pb-12 xl:text-left text-center">
          Genaro
        </h1>
        <h3 className="text-myColors-green  xl:text-left text-center text-[18px] xl:text-[22px] xl:max-w-[500px]">
          Te invitamos a que nos acompañes en este dia tan especial.
        </h3>
      </div>
      <img
        src="/images/fotoGenaro1.webp"
        alt="Foto Genaro"
        className="max-h-[500px] rounded-3xl"
      />
    </div>
  );
};

export default Hero;
