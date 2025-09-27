"use client";
import React from "react";
import Navbar from "../features/header/NavBar";
import Footer from "../features/footer/Footer";
import { useStore } from "../zustand/store";

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
                  products.map((item) => (
                    
                  ))
                )}
              </div>
            </div>

            <div className="mt-8 lg:mt-0">
              <div className="bg-white p-8 shadow-xl rounded-xl space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 border-b pb-4 mb-4">
                  Order Summary
                </h2>

                <div className="flex justify-between text-gray-700">
                  <span>Subtotal:</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-gray-700">
                  <span>Shipping Estimate:</span>
                  <span className="font-semibold">${shipping.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-xl font-extrabold border-t pt-4 mt-4">
                  <span className="text-gray-700 ">Order Total:</span>
                  <span className="text-gray-700">${total.toFixed(2)}</span>
                </div>

                <button
                  type="button"
                  className="w-full bg-green-600 border border-transparent rounded-lg py-3 px-8 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors shadow-lg mt-6"
                >
                  Proceed to Checkout
                </button>

                <a
                  href="/products"
                  className="w-full inline-block text-center mt-3 text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium"
                >
                  Continue Shopping
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
