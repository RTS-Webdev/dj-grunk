'use client'

import Image from "next/image";
import { Footer } from "../components/ui/Footer";
import { Navbar } from "../components/ui/Navbar";
import { albums } from "../utils/albums";
import { Button } from "@/components/ui/button";
import { useState } from "react";

export default function StorePage() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const totalPages = Math.ceil(albums.length / itemsPerPage);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentAlbums = albums.slice(startIndex, endIndex);

    const handlePreviousPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    const handleNextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, totalPages));
    };

    return (
        <div className="flex flex-col min-h-screen">
            <header>
                <Navbar />
            </header>
            <main className="container mx-auto p-6 flex-grow flex items-center">
                <section className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        {currentAlbums.map((album) => (
                            <article 
                                key={album.id} 
                                className="flex flex-col items-center p-4 border rounded-lg shadow-sm"
                            >
                                <Image
                                    src={album.img}
                                    alt={`${album.title} cover`}
                                    width={250}
                                    height={250}
                                    className="w-full h-full object-cover rounded-md"
                                />
                                <h3 className="mt-2 font-bold text-lg text-center">{album.title}</h3>
                                <p className="text-gray-600 text-sm text-center">{album.artist}</p>
                                <p className="mt-2 font-bold text-lg">{album.price} Grunker</p>
                            </article>
                        ))}
                    </div>
                    
                    <nav className="flex justify-center items-center gap-4 mt-8">
                        <Button
                            variant="outline"
                            className="px-4 py-2 transition-transform duration-200 hover:scale-105"
                            disabled={currentPage === 1}
                            onClick={handlePreviousPage}
                        >
                            Previous
                        </Button>
                        <span className="text-sm font-medium">Page {currentPage} of {totalPages}</span>
                        <Button
                            variant="outline"
                            className="px-4 py-2 transition-transform duration-200 hover:scale-105"
                            disabled={currentPage === totalPages}
                            onClick={handleNextPage}
                        >
                            Next
                        </Button>
                    </nav>
                </section>
            </main>
            <Footer />
        </div>
    )
}