import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="footer bg-red-200 relative pt-1">
      <div className="container mx-auto px-6">

        <div className="sm:flex sm:mt-6">
          <div className="mt-6 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
            <div className="flex flex-col hidden md:block">
              <Image
                src="/rose-white.png"
                alt="logo rose orientale"
                width={180}
                height={90}
                layout="intrinsic"
              />
            </div>
            <div className="flex flex-col">
              <h4 className="text-red-300 mt-4 md:mt-0 mb-2 border-b-2 border-red-300">Informations</h4>
              <h6 className="my-1 text-white text-xs"><a href="#" className="">A propos</a></h6>
              <h6 className="my-1 text-white text-xs"><a href="#"
                                        className="">Livraison</a></h6>
            </div>
            <div className="flex flex-col">
              <h4 className="text-red-300 mt-4 md:mt-0 mb-2 border-b-2 border-red-300">Contactez-nous</h4>
              <h6 className="my-1 text-white text-xs">0627915433</h6>
              <h6 className="my-1 text-white text-xs">email@gmail.com</h6>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="mt-8 border-t-2 border-gray-200 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-4">
            <p className="text-sm text-white font-bold mb-2">
              © 2020 Rose Orientale
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}