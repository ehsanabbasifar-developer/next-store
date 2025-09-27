"use client";
import React from "react";
import Navbar from "../features/header/NavBar";
import Footer from "../features/footer/Footer";
import ProductDetails from "./components/ProductDetails"
import { useStore } from "../zustand/store";
import SummaryCart from "./components/SummaryCart";
export function generateMetadata(): Meta {
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
export default function CartPage() {
  const products = useStore((state) => state.product);
  const subtotal = products.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 5.0;
  const total = subtotal + shipping;

  return (
    <div className="flex flex-col min-h-screen font-sans antialiased">
      <header>
        <Navbar />
      </header>
      <main className="flex-grow py-16 mt-14 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              Your Shopping Cart
            </h1>
          </div>

          <div className="lg:grid lg:grid-cols-3 lg:gap-12">
            <div className="lg:col-span-2">
              <div className="bg-white shadow-lg rounded-xl overflow-hidden divide-y divide-gray-200">
                {products.length === 0 ? (
                  <div className="p-8 text-center text-gray-500">
                    Your cart is empty!
                  </div>
                ) : (
                  products.map((item) => <ProductDetails key={item.id} item={item}/>)
                )}
              </div>
            </div>

            <SummaryCart
              shipping={shipping}
              subtotal={subtotal}
              total={total}
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
