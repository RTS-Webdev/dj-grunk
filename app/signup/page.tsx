'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Footer } from "../components/ui/Footer"

export default function Component() {
  const [nameError, setNameError] = useState(false)
  const [name, setName] = useState("")

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
    setNameError(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!name.trim()) {
      setNameError(true)
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-8">
      {/* Logo */}
      <div className="mb-4">
        <Image
          src="/logo.png"
          alt="DJ Grunk Logo"
          width={350}
          height={10}
        />
      </div>

      {/* Main Card */}
      <div className="w-full max-w-[350px] border rounded-lg p-6 space-y-4">
        <h1 className="text-3xl font-normal">Opret bruger</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Navn
            </label>
            <Input 
              id="name"
              type="text"
              placeholder="Fornavn og efternavn"
              className={`w-full ${nameError ? 'border-red-500' : 'border-gray-400'}`}
              value={name}
              onChange={handleNameChange}
            />
            {nameError && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <span className="text-red-500 mr-1">!</span>
                Indtast dit navn
              </p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Telefonnummer eller email
            </label>
            <Input 
              id="email"
              type="text"
              className="w-full border-gray-400"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Adgangskode
            </label>
            <Input 
              id="password"
              type="password"
              placeholder="Mindst 6 tegn"
              className="w-full border-gray-400"
            />
          </div>

          <div>
            <label htmlFor="repassword" className="block text-sm font-medium mb-1">
              Gentag adgangskode
            </label>
            <Input 
              id="repassword"
              type="password"
              className="w-full border-gray-400"
            />
          </div>

          <Button 
            type="submit"
            className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-black font-normal"
          >
            Opret bruger
          </Button>

          <p className="text-xs">
            Ved at oprette en bruger, accepterer du DJ Grunks{" "}
            <Link href="#" className="text-blue-600 hover:text-orange-600 hover:underline">
              Betingelser for brug
            </Link>{" "}
            and{" "}
            <Link href="#" className="text-blue-600 hover:text-orange-600 hover:underline">
              Privatlivspolitik
            </Link>
            .
          </p>
        </form>

        {/* Sign In Link */}
        <div className="flex items-center gap-1">
          <span className="text-sm">Har du allerede en bruger?</span>
          <Link href="/login" className="text-sm text-blue-600 hover:text-orange-600 hover:underline">
            Log ind
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-8 text-xs text-center space-y-4">
        <div className="space-x-4">
          <Link href="#" className="text-blue-600 hover:text-orange-600 hover:underline">
            Betingelser for brug
          </Link>
          <Link href="#" className="text-blue-600 hover:text-orange-600 hover:underline">
            Privatlivspolitik
          </Link>
          <Link href="#" className="text-blue-600 hover:text-orange-600 hover:underline">
            Hjælp
          </Link>
        </div>
        <Footer />
      </footer>
    </div>
  )
}