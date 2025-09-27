import React from "react";
import Footer from "../features/footer/Footer";
import Navbar from "../features/header/NavBar";
import Form from "./components/Form";

export function generateMetadata(): Metada {
  return {
    title: "this is our store",
    description:
      "we have every thing in this store and you can find every thing that you want",
    openGraph: {
      title: "this is our store",
      description:
        "we have every thing in this store and you can find every thing that you want",
    },
  };
}


export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans antialiased">
      <header>
        <Navbar />
      </header>
      <main className="flex-grow mt-12 py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-4xl mx-auto">
          {/* Main heading and description */}
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're here to help! Please fill out the form below and we'll get
              back to you as soon as possible.
            </p>
          </div>

          {/* Contact form */}
          <Form/>
        </div>
      </main>
      <Footer />
    </div>
  );
}
