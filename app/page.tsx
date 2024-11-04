import { Navbar } from "./components/ui/Navbar";
import { Footer } from "./components/ui/Footer";
import { HomePage } from "./components/HomePage";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-([--font-geist-sans)]">
      <Navbar />
      <div className="relative p-10">
        <HomePage />
      </div>
      <div className="flex-grow"></div>
      <Footer />
    </div>
  );
}
