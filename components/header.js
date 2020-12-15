import Link from 'next/link'
import React from "react";
import Image from 'next/image'

export default function Header(props) {
  return (
    <nav className="p-2 mt-0 w-full z-10 pin-t">
      <div className="container mx-auto flex flex-wrap items-center">
        <div className="flex w-full md:w-1/2 justify-center md:justify-start text-white font-extrabold">
          <a href="#">
            <Image
              src="/rose-black.png"
              alt="logo rose orientale"
              width={150}
              height={48}
            />
          </a>
        </div>
        <div className="flex w-full pt-2 content-center justify-between md:w-1/2 md:justify-center">
          <ul className="list-reset flex justify-between flex-1 md:flex-none items-center">
            <li className={`mr ${props.active == 'home' ? 'border-t-2 border-red-200' : ''}`}>
              <Link href="/">
                <a className="inline-block py-2 px-4 no-underline">Accueil</a>
              </Link>
            </li>
            <li className={`mr ${props.active == 'themes' ? 'border-t-2 border-red-200' : ''}`}>
              <Link href="/">
                <a
                  className="inline-block text-grey-dark no-underline hover:text-grey-lighter hover:text-underline py-2 px-4">
                  Thèmes
                </a>
              </Link>
            </li>
            <li className={`mr ${props.active == 'galeries' ? 'border-t-2 border-red-200' : ''}`}>
              <Link href="/">
                <a
                  className="inline-block text-grey-dark no-underline hover:text-grey-lighter hover:text-underline py-2 px-4">
                  Galeries
                </a>
              </Link>
            </li>
            <li className="mr-3">
              <Link href="/">
                <a className="bg-red-200 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-full">
                  Devis
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}