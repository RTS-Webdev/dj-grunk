'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Coins } from 'lucide-react'

export const Navbar = () => {
  return (
    <header>
      <nav className="bg-[#131921] text-white w-full">
        <div className="flex items-center p-4 flex-grow">
          <Link href="/" className="mt-2 flex items-center">
            <Image
              src="/logo.png"
              alt="DJ Grunk Logo"
              width={200}
              height={50}
              className="object-contain"
            />
          </Link>
          <div className="flex items-center justify-end space-x-6 mx-6 whitespace-nowrap flex-grow">
            <Link href="/account" className="link">
              <div>
                <p className="text-xs">Hey! Testbruger</p>
                <p className="font-bold">Din konto</p>
              </div>
            </Link>
          </div>
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative">
                <Coins className="h-8 w-8" />
                <span className="absolute -top-2 -right-2 h-5 w-5 bg-yellow-500 rounded-full flex items-center justify-center font-bold text-xs">
                  1500
                </span>
              </div>
              <p className="font-bold ml-1">Grunker</p>
            </Link>
          </div>
        </div>

        <div className="flex items-center bg-[#232f3e] text-white space-x-3 p-2 pl-4">
          <ul className="flex space-x-3">
            <li><Link href="/" className="link">Forside</Link></li>
            <li><Link href="/store" className="link">Musikbutikken</Link></li>
            <li><Link href="/reviews" className="link">Anmeldelser</Link></li>
            <li><Link href="/contact" className="link">Kontakt</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}
