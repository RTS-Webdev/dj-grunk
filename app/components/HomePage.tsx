import React from 'react'
import { albums } from '../utils/albums'

export const HomePage = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      <div className="h-[500px] flex items-center justify-center text-black text-center border-2 border-black rounded-lg p-4 md:p-6">
        <div className='flex flex-col gap-4'>
          <h1 className="text-xl md:text-2xl font-bold mb-3">Velkommen Hos DJ Grunk</h1>
          <p className="text-sm md:text-base">
            Her hos DJ Grunk kan du være med til at bestemme hvilken musik der skal indkøbes til Musikbiblioteket.
            Hvis du ikke allerede er oprettet som bruger så skynd dig at blive det. Så får du nemlig også 1500 Grunker
            som du kan bruge til at "købe" for i musikbutikken. De cd'er der bliver købt flest gange havner på hitlisten
            her til højre og hvis du er med til at få dine favoritter på hitlisten er der større chance for at du hurtigere
            kan låne dem på Musikbiblioteket. Du kan også lave dine egne anmeldelser, så andre brugere kan se hvilken musik der
            er på toppen i øjeblikket.
            <br /> <br />
            Kig dig omkring og vær med til at sætte liv i kludene.
          </p>
        </div>
      </div>

      <div className="h-[500px] flex flex-col border-2 border-black rounded-lg p-2 md:p-6 text-black">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">Hit Listen</h2>
        <div className="flex flex-col gap-[1.1rem] overflow-y-auto">
          {[...albums]
            .sort(() => Math.random() - 0.5)
            .slice(0, 5)
            .map((album) => (
              <div key={album.id} className="flex items-center gap-4">
                <img 
                  src={album.img} 
                  alt="Album cover" 
                  className="w-16 h-16 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-medium">{album.title}</h3>
                </div>
                <span className="font-bold">
                  {album.price}€
                </span>
              </div>
          ))}
        </div>
      </div>

      <div className="h-[500px] flex flex-col border-2 border-black rounded-lg p-2 md:p-6 text-black">
        <h2 className="text-xl md:text-2xl font-bold mb-4 text-center">XTRA BOX</h2>
        <div className="flex flex-col overflow-y-auto">
          {[...albums]
            .sort(() => Math.random() - 0.5)
            .slice(0, 3)
            .map((album) => (
              <div key={album.id} className="flex items-center gap-4 bg-gray-50 p-3 rounded-lg">
                <img 
                  src={album.img} 
                  alt="Album cover" 
                  className="w-20 h-20 object-cover rounded"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-lg">{album.title}</h3>
                  <p className="text-gray-600">{album.artist}</p>
                  <p className="text-sm mt-1 line-clamp-2">{album.description}</p>
                </div>
                <div className="text-right">
                  <span className="font-bold text-lg block">
                    {album.price}€
                  </span>
                  <span className="text-sm text-gray-600">
                    {album.year}
                  </span>
                </div>
              </div>
          ))}
        </div>
      </div>
    </div>
  )
}
