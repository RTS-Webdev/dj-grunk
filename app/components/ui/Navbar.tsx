import { name } from '@/app/utils'
import Link from 'next/link'
import React from 'react'

export const Navbar = () => {
  return (
    <div className="flex justify-start items-center h-[5rem] bg-neutral-900 text-white">
      <h1 className="text-2xl font-bold pl-6 md:pl-8">
        <Link href="/">{name}</Link>
      </h1>
    </div>
  )
}
