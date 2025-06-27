import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const images = [
  { src: "/images/dress1.webp", alt: "Look 1 - Fachero y Deportivo" },
  { src: "/images/dress2.webp", alt: "Look 2 - Para bailar y perrear" },
  { src: "/images/dress3.webp", alt: "Look 3 - Deportivo de Veranito" },
  { src: "/images/dress4.webp", alt: "Look 4 - Blanco y negro" },
  { src: "/images/dress5.webp", alt: "Look 5 - Look con estilo fresco" },
  { src: "/images/dress6.webp", alt: "Look 6 - Si queres Disfrazate" },
  { src: "/images/dress7.webp", alt: "Look 7 - Si hace calor metemos pile" },
  { src: "/images/dress8.webp", alt: "Look 8 - Para presumir a las Solteras" },
];

const DressCodeGallery: React.FC = () => {
  return (
    <div className="min-h-screen bg-myColors-lightGreen py-10 px-4 pl-10 pr-10">
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 ">
        <h1 className="text-3xl md:text-4xl font-bold text-center text-myColors-gold">
          Inspiración de Vestimenta - Cumple de 1 Año
        </h1>
        <Link href="/">
          <Button className="px-6 py-3 bg-myColors-green text-white rounded-full hover:bg-gray-800 transition">
            Volver al Inicio
          </Button>
        </Link>
      </div>

      <p className="text-center text-lg text-gray-600 mb-8 max-w-xl mx-auto font-semibold">
        El dress code es BLANCO & NEGRO, pero relajado. Usá lo que te haga
        sentir bien, cómodo y con onda. Aquí van algunas ideas:
      </p>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {images.map((image, index) => (
          <Card
            key={index}
            className="rounded-xl shadow-md hover:shadow-xl transition-shadow bg-white border border-gray-200"
          >
            <CardContent className="p-0">
              <div className="relative w-full h-[450px] overflow-hidden rounded-t-xl">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-4 text-center text-sm font-medium text-gray-700">
                {image.alt}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DressCodeGallery;
