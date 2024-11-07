"use client";

import { Button } from "@/components/ui/button";
import { Footer } from "../components/ui/Footer";
import { Navbar } from "../components/ui/Navbar";
import { useState } from "react";
import Image from "next/image";
const reviews = [
    { id: 1, title: "Review 1", content: "This is the first review" },
    { id: 2, title: "Review 2", content: "This is the second review" },
    { id: 3, title: "Review 3", content: "This is the third review" },
    { id: 4, title: "Review 4", content: "This is the fourth review" },
    { id: 5, title: "Review 5", content: "This is the fifth review" },
    { id: 6, title: "Review 6", content: "This is the sixth review" },
    { id: 7, title: "Review 7", content: "This is the seventh review" },
    { id: 8, title: "Review 8", content: "This is the eighth review" },
    { id: 9, title: "Review 9", content: "This is the ninth review" },
    { id: 10, title: "Review 10", content: "This is the tenth review" },
    { id: 11, title: "Review 11", content: "This is the eleventh review" },
    { id: 12, title: "Review 12", content: "This is the twelfth review" },
    { id: 13, title: "Review 13", content: "This is the thirteenth review" },
    { id: 14, title: "Review 14", content: "This is the fourteenth review" },
    { id: 15, title: "Review 15", content: "This is the fifteenth review" },
    { id: 16, title: "Review 16", content: "This is the sixteenth review" },
    { id: 17, title: "Review 17", content: "This is the seventeenth review" },
    { id: 18, title: "Review 18", content: "This is the eighteenth review" },
    { id: 19, title: "Review 19", content: "This is the nineteenth review" },
    { id: 20, title: "Review 20", content: "This is the twentieth review" },
];

export default function Reviews() {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5;
    const totalPages = Math.ceil(reviews.length / itemsPerPage);

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
                        {reviews.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((review) => (
                            <article 
                                key={review.id} 
                                className="flex flex-col items-center p-4 border rounded-lg shadow-sm"
                            >
                                <Image
                                    src={"/200x200.svg"}
                                    alt={`${review.title} cover`}
                                    width={250}
                                    height={250}
                                    className="w-full h-full object-cover rounded-md"
                                />
                                <h3 className="mt-2 font-bold text-lg text-center">{review.title}</h3>
                                <p className="text-gray-600 text-sm text-center">{review.content}</p>
                            </article>
                        ))}
                    </div>
                    
                    <nav className="flex justify-center items-center gap-4 mt-8">
                        <Button
                            variant="default"
                            className="px-4 py-2 transition-transform duration-200 hover:scale-105 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full"
                            disabled={currentPage === 1}
                            onClick={handlePreviousPage}
                        >
                            Forrige
                        </Button>
                        <span className="text-sm font-medium text-gray-700">Side {currentPage} af {totalPages}</span>
                        <Button
                            variant="default"
                            className="px-4 py-2 transition-transform duration-200 hover:scale-105 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-full"
                            disabled={currentPage === totalPages}
                            onClick={handleNextPage}
                        >
                            Næste
                        </Button>
                    </nav>
                </section>
            </main>
            <Footer />
        </div>
    )
}