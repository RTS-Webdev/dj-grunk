'use client'

import { Camera, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useSession } from 'next-auth/react'
import { useState, useRef } from 'react'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Navbar } from '../components/ui/Navbar'
import { Footer } from '../components/ui/Footer'

export default function ProfilePage() {
    const { data: session } = useSession()
    const [bio, setBio] = useState(() => {
        if (typeof window !== 'undefined') {
            return localStorage.getItem('userBio') || ''
        }
        return ''
    })
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleSave = async () => {
        try {
            const response = await fetch('/api/user/update', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ bio }),
            });
            
            if (!response.ok) {
                const errorData = await response.text();
                throw new Error(`HTTP error! status: ${response.status}`);
            }    
        } catch (error) {
        }
    };    

    return (
        <>
            <Navbar />
            <div className="flex flex-col bg-gray-100">
                <main className="flex-grow flex">
                    <div className="flex-grow p-6">
                        <h1 className="text-3xl font-bold mb-6">Din profil</h1>
                        <div className="bg-white border border-gray-300 p-6 mb-6">
                            <div className="flex items-start space-x-6">
                                <div className="relative">
                                    <Image
                                        src={session?.user?.image || '/200x200.svg'}
                                        alt="Profile picture"
                                        width={100}
                                        height={100}
                                        className="rounded-full"
                                    />
                                    <Button
                                        size="icon"
                                        variant="secondary"
                                        className="absolute bottom-0 right-0 bg-white border border-gray-300 rounded-full p-1"
                                        onClick={() => fileInputRef.current?.click()}
                                    >
                                        <Camera className="h-4 w-4" />
                                        <span className="sr-only">Ændre profilbillede</span>
                                    </Button>
                                </div>
                                <div className="flex-grow space-y-4">
                                    <div>
                                        <Label htmlFor="name" className="text-sm font-bold text-gray-700">
                                            Navn
                                        </Label>
                                        <Input 
                                            id="name" 
                                            value={session?.user?.name || ''} 
                                            className="mt-1 bg-gray-50" 
                                            disabled
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="bio" className="text-sm font-bold text-gray-700">
                                            Om mig
                                        </Label>
                                        <Textarea
                                            id="bio"
                                            placeholder="Fortæl lidt om dig selv..."
                                            className="mt-1"
                                            rows={3}
                                            value={bio || ''}
                                            onChange={(e) => {
                                                const newBio = e.target.value;
                                                setBio(newBio);
                                                localStorage.setItem('userBio', newBio);
                                            }}
                                        />
                                    </div>
                                    <div>
                                        <Label className="text-sm font-bold text-gray-700">Antal Grunker</Label>
                                        <p className="text-2xl font-bold text-orange-500">{session?.user?.grunker || 0}</p>
                                    </div>
                                    <Button 
                                        className="bg-yellow-400 hover:bg-yellow-500 transition-colors duration-500 text-black"
                                        onClick={handleSave}
                                    >
                                        Gem ændringer
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white border border-gray-300 p-6">
                            <h2 className="text-2xl font-bold mb-4">Seneste køb</h2>
                            <ul className="divide-y divide-gray-200">
                                {[1, 2, 3, 4].map((i) => (
                                    <li key={i} className="py-4">
                                        <div className="flex items-center justify-between hover:bg-gray-50">
                                            <div>
                                                <p className="font-semibold">Album {i}</p>
                                                <p className="text-sm text-gray-500">Købt den {new Date().toLocaleDateString('da-DK')}</p>
                                            </div>
                                            <ChevronRight className="h-5 w-5 text-gray-400" />
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </main>
                <div className="bottom-0 left-0 right-0 text-center p-8">
                    <Footer />
                </div>
            </div>
        </>
    )
}