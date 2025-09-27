import { Metadata } from "next";
import Footer from "./features/footer/Footer";
import Navbar from "./features/header/NavBar";
import MainBar from "./features/main/MainBar";

export function generateMetadata () :Metadata {
  RETU
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans antialiased">
      <header>
        <Navbar />
      </header>

      <MainBar />

      <Footer />
    </div>
  );
}
