import { Navbar } from "./components/ui/Navbar";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import { albums } from "./utils/albums";
import { Footer } from "./components/ui/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="container mx-auto p-6 min-h-[calc(100vh-200px)] flex items-center">
        <div className="grid gap-6 md:grid-cols-3 w-full">
          <Card className="p-6">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-bold">Velkommen</h2>
              <p className="text-gray-600">
                Velkommen Hos DJ Grunk. Her hos DJ Grunk kan du være med til at
                bestemme hvilken musik der skal indkøbes til Musikbiblioteket.
                Hvis du ikke allerede er oprettet som bruger så skynd dig at
                blive det. Så får du nemlig også 1500 Grunker som du kan bruge
                til at &quot;købe&quot; for i musikbutikken. De cd&pos;er der bliver købt
                flest gange havner på hitlisten her til højre og hvis du er
                med til at få dine favoritter på hitlisten er der større chance
                for at du hurtigere kan låne dem på Musikbiblioteket. Du kan
                også lave dine egne anmeldelser, så andre brugere kan se hvilken
                musik der er på toppen i øjeblikket.
                <br /> <br />
                Kig dig omkring og vær med
                til at sætte liv i kludene. DJ Grunk.
              </p>
            </CardContent>
          </Card>

          <Card className="p-6">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-bold">Hitlisten</h2>
              <ul className="space-y-2">
                {[...albums]
                  .sort(() => Math.random() - 0.5)
                  .slice(0, 5)
                  .map((album) => (
                    <div key={album.id} className="flex items-center gap-4">
                      <Image
                        src={album.img}
                        alt="Album cover"
                        width={64}
                        height={64}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium">{album.title}</h3>
                      </div>
                      <span className="font-bold">{album.price} Grunker</span>
                    </div>
                  ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="p-6 rounded-lg">
            <CardContent className="space-y-4">
              <h2 className="text-2xl font-bold">Fremhævede album</h2>
              <div className="grid gap-4">
                {[...albums]
                  .sort(() => Math.random() - 0.5)
                  .slice(0, 3)
                  .map((album) => (
                    <div
                      key={album.id}
                      className="flex items-center gap-4 p-3 rounded-lg"
                    >
                      <Image
                        src={album.img}
                        alt="Album cover"
                        width={80}
                        height={80}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div className="flex-1">
                        <h3 className="font-bold text-lg">{album.title}</h3>
                        <p className="text-gray-600">{album.artist}</p>
                        <p className="text-sm mt-1 line-clamp-2">
                          {album.description}
                        </p>
                      </div>
                      <div className="text-right">
                        <span className="font-bold text-lg block">
                          {album.price} Grunker
                        </span>
                        <span className="text-sm text-gray-600">
                          {album.year}
                        </span>
                      </div>
                    </div>
                  ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
      <footer className="mt-8 text-m text-center space-y-4 bottom-0 left-0 right-0 p-8 md:fixed">
        <Footer />
      </footer>
    </>
  );
}
