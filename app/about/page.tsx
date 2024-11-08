'use client';

import { useSearchParams } from 'next/navigation';
import { Navbar } from '../components/ui/Navbar';
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { ShoppingCart, Star } from "lucide-react"
import Image from 'next/image';
import { albums } from '../utils/albums';

export default function AboutPage() {
    const searchParams = useSearchParams();

    const title = searchParams.get('title');
    const genre = searchParams.get('genre');
    const artist = searchParams.get('artist');
    const price = searchParams.get('price');
    const img = searchParams.get('img');

    if (!title || !artist || !price || !img || !genre) {
        return <p>Indlæser albumdata...</p>;
    }

    return (
        <div className='flex flex-col min-h-screen'>
            <header>
                <Navbar />
            </header>
            <main className="container mx-auto p-6 flex-grow flex items-center justify-center space-x-10">
                <Card className="h-fit">
                    <CardContent className="p-8">
                        <h2 className="font-semibold mb-4">Relaterede albums</h2>
                        <ScrollArea className="h-[300px]">
                            {albums.filter(album => album.genre === genre && album.id !== albums.find(a => a.title === title)?.id).map((album) => (
                                <div key={album.id} className="flex gap-4 mb-4">
                                    <Image
                                        alt={`${album.title} cover`}
                                        className="rounded-md object-cover"
                                        height={50}
                                        src={album.img}
                                        style={{
                                            aspectRatio: "1",
                                            objectFit: "cover",
                                        }}
                                        width={50}
                                    />
                                    <div className="space-y-1">
                                        <h3 className="font-medium leading-none">{album.title}</h3>
                                        <p className="text-sm text-muted-foreground">{album.artist}</p>
                                    </div>
                                </div>
                            ))}
                        </ScrollArea>
                    </CardContent>
                </Card>

                <Card>
                    <CardContent className="p-6">
                        <div className="grid md:grid-cols-[1fr_400px] gap-6">
                            <div className="space-y-4">
                                <h1 className="font-bold text-2xl">{title}</h1>
                                <p className="text-muted-foreground">{genre.substring(0, 1).toUpperCase() + genre.substring(1).toLowerCase()}</p>
                                <div className="flex items-center gap-2">
                                    <div className="flex">
                                        {[...Array(4)].map((_, i) => (
                                            <Star key={i} className="w-5 h-5 fill-primary" />
                                        ))}
                                        <Star className="w-5 h-5" />
                                    </div>
                                    <span className="text-sm text-muted-foreground">(128 reviews)</span>
                                </div>
                                <div className="text-2xl font-bold">{price} Grunker</div>
                                <Button className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600">
                                    <ShoppingCart className="w-4 h-4 mr-2" />
                                    Add to Cart
                                </Button>
                                <div className="pt-4">
                                    <h2 className="font-semibold mb-2">Reviews</h2>
                                    <ScrollArea className="h-[200px] w-full rounded-md border p-4">
                                        {[1, 2, 3].map((i) => (
                                            <div key={i} className="mb-4 last:mb-0">
                                                <div className="flex items-center gap-2 mb-1">
                                                    <div className="flex">
                                                        {[...Array(5)].map((_, j) => (
                                                            <Star key={j} className={`w-4 h-4 ${j < 4 ? "fill-primary" : ""}`} />
                                                        ))}
                                                    </div>
                                                    <span className="text-sm font-medium">User {i}</span>
                                                </div>
                                                <p className="text-sm text-muted-foreground">
                                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, voluptate.
                                                </p>
                                            </div>
                                        ))}
                                    </ScrollArea>
                                </div>
                            </div>
                            <div className="relative">
                                <Image
                                    alt="Album cover"
                                    className="rounded-lg object-cover"
                                    height={500}
                                    src={img}
                                    style={{
                                        aspectRatio: 1,
                                        objectFit: "cover",
                                    }}
                                    width={500}
                                />
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </main>
        </div>
    );
}
