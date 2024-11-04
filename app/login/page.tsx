'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Footer } from "../components/ui/Footer"
import { useRouter } from "next/navigation"

export default function Login() {
  const [isHelpOpen, setIsHelpOpen] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (email === "test@test.com" && password === "123") {
      router.push("/account")
    }
  }

  return (
    <div className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="mb-4">
        <Image
          src="/logo.png"
          alt="DJ Grunk Logo"
          width={350}
          height={10}
        />
      </div>

      <div className="w-full max-w-[350px] border rounded-lg p-6 space-y-6">
        <h1 className="text-3xl font-normal">Log ind</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              Email eller mobilnummer
            </label>
            <Input 
              id="email"
              type="text"
              className="w-full border-gray-400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Adgangskode
            </label>
            <Input 
              id="password"
              type="password"
              className="w-full border-gray-400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <Button type="submit" className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-black font-normal">
            Fortsæt
          </Button>

          <p className="text-xs">
            Ved at fortsætte, accepterer du DJ Grunk's{" "}
            <Link href="#" className="text-blue-600 hover:text-orange-600 hover:underline">
              Betingelser for brug
            </Link>{" "}
            og{" "}
            <Link href="#" className="text-blue-600 hover:text-orange-600 hover:underline">
              Privatlivspolitik
            </Link>
            .
          </p>
        </form>

        <div>
          <button
            onClick={() => setIsHelpOpen(!isHelpOpen)}
            className="flex items-center text-sm text-gray-600 hover:text-gray-800"
          >
            {isHelpOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            <span className="ml-1">Har du brug for hjælp?</span>
          </button>
          
          {isHelpOpen && (
            <div className="mt-2 space-y-2">
              <Link href="#" className="block text-sm text-blue-600 hover:text-orange-600 hover:underline">
                Glemt din adganskode?
              </Link>
              <Link href="#" className="block text-sm text-blue-600 hover:text-orange-600 hover:underline">
                Andre problemer med login?
              </Link>
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 w-full max-w-[350px] text-center">
        <div className="relative">
          <hr className="border-gray-300" />
          <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white px-2 text-sm text-gray-600">
            Ny hos DJ Grunk?
          </span>
        </div>
        
        <Button 
          variant="outline" 
          className="mt-4 w-full bg-gray-100 hover:bg-gray-200"
          asChild
        >
          <Link href="/signup">
            Opret din konto her
          </Link>
        </Button>
      </div>

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