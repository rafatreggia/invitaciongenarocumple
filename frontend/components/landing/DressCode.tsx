import Link from "next/link";
import React from "react";

const DressCode = () => {
  return (
    <div id="dressCode" className="min-h-[200px] flex flex-col items-center justify-center gap-2">
      <h1 className="myTextGradient text-center font-pacifico text-[32px] xl:text-[50px] mt-5">
        Dress Code
      </h1>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="70"
          height="70"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 4.5c-.652 0-1.208.416-1.415 1A.75.75 0 1 1 9.171 5a3 3 0 1 1 4.588 3.43c-.301.219-.568.438-.757.667c-.186.226-.252.407-.252.563a.66.66 0 0 0 .346.58l7.607 4.112A2.473 2.473 0 0 1 19.527 19H4.473a2.473 2.473 0 0 1-1.176-4.648l6.1-3.298a.75.75 0 1 1 .713 1.32l-6.1 3.297a.973.973 0 0 0 .463 1.829h15.054a.973.973 0 0 0 .463-1.829l-7.607-4.112a2.16 2.16 0 0 1-1.133-1.9c0-.623.278-1.131.594-1.515c.314-.38.707-.69 1.035-.928A1.5 1.5 0 0 0 12 4.5"
          />
        </svg>
      </div>
      <div className="flex flex-col items-center justify-center font-semibold">
        <h2 className="text-center">¡El Codigo de Vestimenta Sera!</h2>
        <h1 className=" text-center font-pacifico text-[16px] xl:text-[28px] mt-5">
          Relajate y Disfruta...
        </h1>
        <h2 className="text-center mt-5">
          Una orientacion para tu vestuario...
        </h2>
      </div>
      <Link href={"/dresscode"} className="mt-5 pb-5 inline-block animate-bounce">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 256 256"
        >
          <path
            fill="#cb1f27"
            d="M0 128.002c0 52.414 31.518 97.442 76.619 117.239c-.36-8.938-.064-19.668 2.228-29.393c2.461-10.391 16.47-69.748 16.47-69.748s-4.089-8.173-4.089-20.252c0-18.969 10.994-33.136 24.686-33.136c11.643 0 17.268 8.745 17.268 19.217c0 11.704-7.465 29.211-11.304 45.426c-3.207 13.578 6.808 24.653 20.203 24.653c24.252 0 40.586-31.149 40.586-68.055c0-28.054-18.895-49.052-53.262-49.052c-38.828 0-63.017 28.956-63.017 61.3c0 11.152 3.288 19.016 8.438 25.106c2.368 2.797 2.697 3.922 1.84 7.134c-.614 2.355-2.024 8.025-2.608 10.272c-.852 3.242-3.479 4.401-6.409 3.204c-17.884-7.301-26.213-26.886-26.213-48.902c0-36.361 30.666-79.961 91.482-79.961c48.87 0 81.035 35.364 81.035 73.325c0 50.213-27.916 87.726-69.066 87.726c-13.819 0-26.818-7.47-31.271-15.955c0 0-7.431 29.492-9.005 35.187c-2.714 9.869-8.026 19.733-12.883 27.421a127.9 127.9 0 0 0 36.277 5.249c70.684 0 127.996-57.309 127.996-128.005C256.001 57.309 198.689 0 128.005 0C57.314 0 0 57.309 0 128.002"
          />
        </svg>
        
      </Link>
    </div>
  );
};

export default DressCode;
