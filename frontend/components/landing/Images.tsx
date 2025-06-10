"use client";
import React from "react";
import ThreeDPhotoCarousel from "../ui/3d-carousel";


const Images = () => {
  return (
    <div id="photos" className="min-h-[150px]">
      <div className="w-full max-w-4xl">
        <div className="min-h-[500px]  flex flex-col justify-center  rounded-lg space-y-4">
          <div className="p-2">
            <ThreeDPhotoCarousel />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Images;
