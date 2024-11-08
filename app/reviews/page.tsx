"use client";

import { Button } from "@/components/ui/button";
import { Footer } from "../components/ui/Footer";
import { Navbar } from "../components/ui/Navbar";
import { useState } from "react";
import Image from "next/image";
const reviews = [
    { id: "gnarls", title: "Gnals Barkley", content: "Du skal simpelthen lytte til Gnarls Barkley. Det er det fedeste der er sket på den internationale musikscene i rigtigt rigtigt mange år." },
    { id: "StadiumArcadium", title: "Rød Varm Peber", content: "Fantastisk dobbeltalbum med den klassiske RHCP-basgang og fuld skrue hele vejen. Køb den før din nabo og skru rigtig højt op!" },
    { id: "SkousenDaddyLongleg", title: "SKOUSEN", content: "Han er gammel, ham her, men på den fede måde ? Det er en skæv, jazzet CD med nogle helt utrolige tekster. Ikke lige det man er vant til, men det holder 100%." },
    { id: "KnopflerHarrisRoadrunning", title: "Knopfler & Harris", content: "Jeg er ikke så meget til Dire Straits, og det er der en lille smule for meget af på det her album. Til gengæld synger damen fænomenalt." },
    { id: "SpringsteenOvercome", title: "Bruce er gud", content: "Sangene på CD’en er ikke skrevet af Springsteen, men af Pete Seeger – en folk-sanger fra for rigtig længe siden. Han var meget politisk, ligesom Springsteen, og det er sangene også. Det er sådan nogle tekster man lige tænker en ekstra gang over." },
    { id: "JohnsonPasser", title: "DET PASSER", content: "Johnson er smørklatten i dansk hiphops risengrød lige nu. Hans timing kikser aldrig, og vokalen er for fed. Hans producere har til gengæld lavet lige lovlig meget genbrug, men det er jo nok ikke Johnsons skyld. Og han har humor, ikke in-your-face-agtig, men ret diskret. Jeg kan lide det." },
    { id: "Eurovision", title: "Konkurrence - Hmm.", content: "Jeg fatter det ikke! De har gjort det i over et halvt århundrede, og de er stadig ikke trætte af det. Det er vi andre til gengæld. 1½ times dansktop på pølseengelsk sunget med bizar accent, og nu tilsat alle mulige beats, så ikke engang mormorgenerationen kan lide det mere. Jeg tror jeg sidder over, tak." },
    { id: "DanserMedBedste", title: "Danser Med Bedste", content: "Lyden fænger egentlig meget godt, kunne man dog bare udgå at høre efter teksterne. Mage til Ude & Hjemme-følelsespornografi skal man lede længe efter. Smagløst, slet og ret. Men sådan noget man godt kan holde ud at høre til naboens havefest, hvor det gud-ske-tak-og-lov er for meget larm til at man kan skelne ordene." },
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
            <main className="container mx-auto p-6 flex-grow">
                <section className="w-full">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                        {reviews.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((review) => (
                            <article
                                key={review.id}
                                className="flex flex-col items-center p-4 border rounded-lg shadow-sm"
                            >
                                <div className="aspect-square w-full relative">
                                    <Image
                                        src={`/albums/${review.id}.jpg`}
                                        alt={`${review.title} cover`}
                                        fill
                                        quality={100}
                                        className="object-cover rounded-md hover:cursor-pointer"
                                    />
                                </div>
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