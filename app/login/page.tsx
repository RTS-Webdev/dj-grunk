'use client'

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { useRouter } from 'next/navigation'
import { Navbar } from "../components/ui/Navbar"
import { signIn } from 'next-auth/react'
import { Footer } from "../components/ui/Footer"

export default function Login() {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [isHelpOpen, setIsHelpOpen] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)

    try {
      const result = await signIn('credentials', {
        email,
        password,
        redirect: false,
      })

      if (result?.error) {
        setError(result.error)
      } else {
        router.push('/account')
      }
    } catch (err: any) {
      setError(err.message || 'Der opstod en fejl ved login')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Navbar />
      <div className="flex flex-col items-center px-4 py-8">
        <div className="mb-4">
          <Image
            src="/logo.png"
            alt="Logo"
            width={350}
            height={10}
          />
        </div>

        <div className="w-full max-w-[350px] border rounded-lg p-6 space-y-6">
          <h1 className="text-3xl font-normal">Log ind</h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">
                Email eller telefonnummer
              </label>
              <Input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-gray-400"
              />
            </div>

            {error && (
              <p className="text-red-500 text-sm">{error}</p>
            )}

            <Button
              className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-black font-normal"
              disabled={loading}
            >
              {loading ? 'Logger ind...' : 'Fortsæt'}
            </Button>

            <p className="text-xs">
              Ved at fortsætte accepterer du vores{" "}
              <Link href="" className="text-blue-600 hover:text-orange-600 hover:underline">
                Brugervilkår
              </Link>{" "}
              og{" "}
              <Link href="" className="text-blue-600 hover:text-orange-600 hover:underline">
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
              <span className="ml-1">Brug for hjælp?</span>
            </button>

            {isHelpOpen && (
              <div className="mt-2 space-y-2">
                <Link href="" className="block text-sm text-blue-600 hover:text-orange-600 hover:underline">
                  Glemt din adgangskode?
                </Link>
                <Link href="" className="block text-sm text-blue-600 hover:text-orange-600 hover:underline">
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
              Ny bruger?
            </span>
          </div>

          <Link href="/signup">
            <Button
              variant="outline"
              className="mt-4 w-full bg-gray-100 hover:bg-gray-200"
            >
              Opret ny konto
            </Button>
          </Link>
        </div>

        <footer className="mt-8 text-xs text-center space-y-4">
          <div className="space-x-4">
            <Link href="" className="text-blue-600 hover:text-orange-600 hover:underline">
              Brugervilkår
            </Link>
            <Link href="" className="text-blue-600 hover:text-orange-600 hover:underline">
              Privatlivspolitik
            </Link>
            <Link href="" className="text-blue-600 hover:text-orange-600 hover:underline">
              Hjælp
            </Link>
          </div>
          <Footer />
        </footer>
      </div>
    </>
  )
}