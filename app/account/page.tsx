'use client'

import { Camera, ChevronRight } from 'lucide-react'
import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Navbar } from '../components/ui/Navbar'
import { Footer } from '../components/ui/Footer'

export default function ProfilePage() {
    return (
        <>
            <Navbar />
            <main className="min-h-screen bg-gray-100">
                <div className="container mx-auto p-6">
                    <header>
                        <h1 className="text-3xl font-bold mb-6">Din profil</h1>
                    </header>
                    
                    <section className="bg-white border border-gray-300 p-6 mb-6" aria-label="Profil information">
                        <div className="flex items-start space-x-6">
                            <figure className="relative">
                                <Image
                                    src="/200x200.svg"
                                    alt="Profile picture"
                                    width={100}
                                    height={100}
                                    className="rounded-full"
                                />
                                <Button
                                    size="icon"
                                    variant="secondary"
                                    className="absolute bottom-0 right-0 bg-white border border-gray-300 rounded-full p-1"
                                    aria-label="Ændre profilbillede"
                                >
                                    <Camera className="h-4 w-4" />
                                </Button>
                            </figure>
                            
                            <form className="flex-grow space-y-4">
                                <div>
                                    <Label htmlFor="name" className="text-sm font-bold text-gray-700">
                                        Navn
                                    </Label>
                                    <Input 
                                        id="name" 
                                        value="Testbruger" 
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
                                        value="Testbruger"
                                    />
                                </div>
                                <div>
                                    <Label className="text-sm font-bold text-gray-700">Antal Grunker</Label>
                                    <p className="text-2xl font-bold text-orange-500">1500</p>
                                </div>
                                <Button 
                                    className="bg-yellow-400 hover:bg-yellow-500 transition-colors duration-500 text-black"
                                >
                                    Gem ændringer
                                </Button>
                            </form>
                        </div>
                    </section>

                    <section className="bg-white border border-gray-300 p-6" aria-label="Købshistorik">
                        <h2 className="text-2xl font-bold mb-4">Seneste køb</h2>
                        <nav>
                            <ul className="divide-y divide-gray-200">
                                {[1, 2, 3, 4].map((i) => (
                                    <li key={i} className="py-4">
                                        <a className="flex items-center justify-between hover:bg-gray-50">
                                            <div>
                                                <p className="font-semibold">Album {i}</p>
                                                <time className="text-sm text-gray-500" dateTime={new Date().toISOString()}>
                                                    Købt den {new Date().toLocaleDateString('da-DK')}
                                                </time>
                                            </div>
                                            <ChevronRight className="h-5 w-5 text-gray-400" aria-hidden="true" />
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </section>
                </div>
            </main>
            
            <Footer />
        </>
    )
}