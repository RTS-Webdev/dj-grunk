'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Footer } from '../components/ui/Footer'
import { Navbar } from '../components/ui/Navbar'

export default function SignUp() {
  const router = useRouter()
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [repassword, setRepassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const [nameError, setNameError] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)
  const [repasswordError, setRepasswordError] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    
    setNameError(false)
    setEmailError(false)
    setPasswordError(false)
    setRepasswordError(false)

    if (!name.trim()) {
      setNameError(true)
      setLoading(false)
      return
    }
    if (!email) {
      setEmailError(true)
      setLoading(false)
      return
    }

    if (password !== repassword) {
      setError('Adgangskoderne matcher ikke')
      setLoading(false)
      return
    }

    try {
      const response = await fetch('/api/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error)
      }

      router.push('/login')
    } catch (err: any) {
      setError(err.message || 'Der opstod en fejl')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
    <Navbar />
    <div className="min-h-screen flex flex-col items-center px-4 py-8">
      <div className="mb-4">
        <Image
          src="/logo.png"
          alt="Logo"
          width={350}
          height={10}
        />
      </div>

      <div className="w-full max-w-[350px] border rounded-lg p-6 space-y-4">
        <h1 className="text-3xl font-normal">Opret konto</h1>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              Dit navn
            </label>
            <Input 
              id="name"
              type="text"
              placeholder="For- og efternavn"
              className={`w-full ${nameError ? 'border-red-500' : 'border-gray-400'}`}
              value={name}
              onChange={(e) => {
                setName(e.target.value)
                setNameError(false)
              }}
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
              Email
            </label>
            <Input 
              id="email"
              type="email"
              placeholder="Indtast din email"
              className={`w-full ${emailError ? 'border-red-500' : 'border-gray-400'}`}
              value={email}
              onChange={(e) => {
                setEmail(e.target.value)
                setEmailError(false)
              }}
            />
            {emailError && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <span className="text-red-500 mr-1">!</span>
                Indtast en gyldig email-adresse
              </p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium mb-1">
              Adgangskode
            </label>
            <Input 
              id="password"
              type="password"
              placeholder="Indtast din adgangskode"
              className={`w-full ${passwordError ? 'border-red-500' : 'border-gray-400'}`}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value)
                setPasswordError(false)
              }}
            />
            {passwordError && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <span className="text-red-500 mr-1">!</span>
                Adgangskoderne skal matche
              </p>
            )}
          </div>

          <div>
            <label htmlFor="repassword" className="block text-sm font-medium mb-1">
              Bekræft adgangskode
            </label>
            <Input 
              id="repassword"
              type="password"
              placeholder="Bekræft din adgangskode"
              className={`w-full ${repasswordError ? 'border-red-500' : 'border-gray-400'}`}
              value={repassword}
              onChange={(e) => {
                setRepassword(e.target.value)
                setRepasswordError(false)
              }}
            />
            {repasswordError && (
              <p className="text-red-500 text-sm mt-1 flex items-center">
                <span className="text-red-500 mr-1">!</span>
                Adgangskoderne skal matche
              </p>
            )}
          </div>

          <Button 
            type="submit"
            disabled={loading}
            className="w-full bg-[#FFD814] hover:bg-[#F7CA00] text-black font-normal"
          >
            {loading ? 'Opretter konto...' : 'Fortsæt'}
          </Button>

          {error && (
            <p className="text-red-500 text-sm">{error}</p>
          )}

          <p className="text-xs">
            Ved at oprette en konto accepterer du vores{" "}
            <Link href="#" className="text-blue-600 hover:text-orange-600 hover:underline">
              Brugervilkår
            </Link>{" "}
            og{" "}
            <Link href="#" className="text-blue-600 hover:text-orange-600 hover:underline">
              Privatlivspolitik
            </Link>
            .
          </p>
        </form>

        <div className="flex items-center gap-1">
          <span className="text-sm">Har du allerede en konto?</span>
          <Link href="/login" className="text-sm text-blue-600 hover:text-orange-600 hover:underline">
            Log ind
          </Link>
        </div>
      </div>

      <footer className="mt-8 text-xs text-center space-y-4">
        <Footer />
      </footer>
    </div>
    </>
  )
}