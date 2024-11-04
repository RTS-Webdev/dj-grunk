import { getServerSession } from 'next-auth/next'
import { NextResponse } from 'next/server'
import prisma from '@/prisma/client'
import bcrypt from 'bcrypt'
import { authOptions } from '../auth/[...nextauth]/route'

export async function GET() {
  const session = await getServerSession(authOptions)
  
  if (!session) {
    return NextResponse.redirect('/login')
  }
  
  return NextResponse.json({ session })
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, password } = body

    if (!email || !password) {
      return NextResponse.json(
        { error: 'Email og adgangskode skal udfyldes' },
        { status: 400 }
      )
    }

    const user = await prisma.user.findUnique({
      where: { email }
    })

    if (!user) {
      return NextResponse.json(
        { error: 'Forkert email eller adgangskode' },
        { status: 401 }
      )
    }

    const passwordMatch = await bcrypt.compare(password, user.pass)

    if (!passwordMatch) {
      return NextResponse.json(
        { error: 'Forkert email eller adgangskode' },
        { status: 401 }
      )
    }

    return NextResponse.json({ 
      success: true,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        grunker: user.grunker
      }
    })
  } catch (error) {
    console.error('Login error:', error)
    return NextResponse.json(
      { error: 'Der opstod en fejl ved login' },
      { status: 500 }
    )
  }
} 