import { Footer } from "../components/ui/Footer";
import { Navbar } from "../components/ui/Navbar";

export default function Contact() {
    return (
        <div className="flex flex-col min-h-screen">
            <header>
                <Navbar />
            </header>
            <main className="container mx-auto p-6 flex-grow flex items-center justify-center flex-wrap">
                <article className="p-4 w-full md:w-1/2 lg:w-1/3">
                    <h1 className="text-2xl font-bold">Skørby Bibliotek</h1>
                    <section className="mt-4">
                        <h2 className="text-xl font-semibold">Adresse</h2>
                        <address className="mt-2">
                            <p>Park Allé 335</p>
                            <p>2100 København Ø</p>
                        </address>
                    </section>
                    <section className="mt-4">
                        <h2 className="text-xl font-semibold">Åbningstider</h2>
                        <ul className="list-disc list-inside mt-2">
                            <li>Mandag – Fredag: 10.00 – 18.00</li>
                            <li>Lørdag: 9.00 – 13.00</li>
                            <li>Søndag: Lukket</li>
                        </ul>
                    </section>
                    <section className="mt-4">
                        <h2 className="text-xl font-semibold">Kontaktoplysninger</h2>
                        <p className="mt-2">Telefon: 67912801</p>
                        <p>Email: <a href="mailto:info@skoerby-bibliotek.dk" className="text-blue-500">info@skoerby-bibliotek.dk</a></p>
                    </section>
                </article>
                <form className="w-full md:w-1/2 lg:w-1/3 p-4">
                    <h2 className="text-xl font-semibold">Kontaktformular</h2>
                    <div className="mt-4">
                        <label className="block mb-2" htmlFor="name">Navn:</label>
                        <input
                            type="text"
                            id="name"
                            className="border rounded w-full p-2"
                            placeholder="Indtast dit navn"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block mb-2" htmlFor="email">Email:</label>
                        <input
                            type="email"
                            id="email"
                            className="border rounded w-full p-2"
                            placeholder="Indtast din email"
                        />
                    </div>
                    <div className="mt-4">
                        <label className="block mb-2" htmlFor="message">Besked:</label>
                        <textarea
                            id="message"
                            className="border rounded w-full p-2"
                            rows={4}
                            placeholder="Skriv din besked her"
                        />
                    </div>
                    <button
                        type="submit"
                        className="mt-4 bg-blue-500 text-white rounded p-2 hover:bg-blue-600"
                    >
                        Send
                    </button>
                </form>
            </main>

            <Footer />
        </div>
    )
}