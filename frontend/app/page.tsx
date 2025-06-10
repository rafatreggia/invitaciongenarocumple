import Agenda from "@/components/landing/Agenda";
import AlbumPhotos from "@/components/landing/AlbumPhotos";
import Confirmation from "@/components/landing/Confirmation";
import DressCode from "@/components/landing/DressCode";
import Hero from "@/components/landing/Hero";
import Images from "@/components/landing/Images";
import Info from "@/components/landing/Info";
import Nav from "@/components/landing/Nav";
import MyFont from "@/components/MyFont";
import { Button } from "@/components/ui/button";
import { Hexagon, Github, Twitter, Cake, Panda, PandaIcon } from "lucide-react";
import { Footer } from "@/components/ui/footer";
import { div } from "framer-motion/client";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen overflow-x-hidden">
      <MyFont></MyFont>
      <Nav />
      <div className="w-full bg-myColors-lightGreen">
        <Hero />
      </div>
      <div className="w-full">
        <Info />
      </div>
      <div className="w-full bg-myColors-green">
        <Confirmation />
      </div>
      <div className="bg-myColors-lightGreen w-full">
        <Agenda />
      </div>
      <div className="bg-myColors-lightGreen w-full flex items-center justify-center">
        <Images />
      </div>
      <div className="bg-myColors-lightGreen w-full flex items-center justify-center">
        <AlbumPhotos />
      </div>

      <DressCode />

      <div className="w-full myScreen">
        <Footer
          logo={<img src="/images/panda.webp" className="h-10 w-10" />}
          brandName="Cumple Genaro"
          socialLinks={[
            {
              icon: (
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 36 36"
                  >
                    <path
                      fill="currentColor"
                      d="M16.52 3v-.5c0-.28-.22-.5-.5-.5s-.5.22-.5.5V3h-.5c-.28 0-.5.22-.5.5s.22.5.5.5h.5v2.082q-.211.072-.4.208l-5.89 4.2c-.22.16-.35.41-.35.68a.85.85 0 0 0 1.15.778v5.703L2.41 22.41c-.24.15-.38.4-.38.68h-.01v.11c0 .63.7 1.02 1.23.68l.78-.493v4.603h-.69c-.74 0-1.34.6-1.34 1.34v.66h2.03V30h24v-.01h2v-.66c0-.74-.6-1.34-1.34-1.34h-.66v-4.7l.77.48a.801.801 0 1 0 .85-1.36l-7.62-4.766v-5.696a.83.83 0 0 0 1.13-.778c0-.27-.13-.52-.35-.68l-5.89-4.2q-.189-.136-.4-.208V4h.5c.28 0 .5-.22.5-.5c0-.27-.23-.5-.5-.5zm1.51 12.142l-.61-.382c-.84-.53-1.91-.53-2.76 0l-.63.393V13c0-1.1.9-2 2-2s2 .9 2 2zm5.14 9.438v3.41h-3.16v-3.41c0-.87.71-1.58 1.58-1.58s1.58.71 1.58 1.58M18.03 22v5.99h-4V22c0-1.1.9-2 2-2s2 .9 2 2m-6.01 2.57v3.42H8.89v-3.42c0-.87.7-1.57 1.57-1.57s1.57.7 1.57 1.57z"
                    />
                  </svg>
                </div>
              ),
              href: "https://maps.app.goo.gl/V5MuCBWkaUXCuRFC8",
              label: "Iglesia",
            },
            {
              icon: <Cake />,
              href: "https://maps.app.goo.gl/GrmqTgqpt3SHnoEKA",
              label: "Fiesta",
            },
          ]}
          mainLinks={[
            { href: "#hero", label: "Home" },
            { href: "#info", label: "Info" },
            { href: "#confirmacion", label: "Confirmacion" },
            { href: "#photos", label: "Fotos" },
          ]}
          legalLinks={[]}
          copyright={{
            text: "",
            license: "",
          }}
        />
        <div className="w-full flex items-center justify-center gap-3 mb-3">
          <img
            src="/images/neurostack.webp"
            className="h-10 w-10 rounded-3xl"
            alt="logo desarrolladora"
          />
          <div className="flex flex-col items-center justify-center text-gray-400 font-light text-[13px]">
            <h3>© 2025 Desarrollado por Rafa Treggia</h3>
            <h3>All rights reserved</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
