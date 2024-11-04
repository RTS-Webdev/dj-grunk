import 'next-auth'

declare module 'next-auth' {
  interface User {
    id: string
    grunker: number
  }

  interface Session {
    user: User & {
      id: string
      grunker: number
    }
  }
} 