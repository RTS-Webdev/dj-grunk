import { Navbar } from "./components/ui/Navbar";
import { Footer } from "./components/ui/Footer";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-zinc-900">
      <Navbar />
      <div className="flex-grow"></div>
      <Footer />
    </div>
  );
}
