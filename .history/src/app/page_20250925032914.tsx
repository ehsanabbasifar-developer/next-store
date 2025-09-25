import Footer from "./features/footer/Footer";
import Navbar from "./features/header/NavBar";
import MainBar from "./features/main/MainBar";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen font-sans antialiased">
      <Navbar />

      <MainBar />

      <Footer />
    </div>
  );
}
