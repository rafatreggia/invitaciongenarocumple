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

      <Images />
      <AlbumPhotos />
      <DressCode />
    </div>
  );
}
