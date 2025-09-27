import React from "react";
import Navbar from "../features/header/NavBar";
import Footer from "../features/footer/Footer";
import { useStore } from "../zustand/store";



export default function CartPage() {
    const products = useStore((state) => state.product)
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
                    <div
                      key={item.id}
                      className="flex items-center p-6 sm:p-8 space-x-4"
                    >
                      <div className="flex-shrink-0">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-20 h-20 object-cover rounded-md"
                        />
                      </div>

                      <div className="flex-grow">
                        <h2 className="text-lg font-semibold text-gray-900">
                          {item.title}
                        </h2>
                        <p className="text-gray-600">
                          ${item.price.toFixed(2)}
                        </p>
                      </div>

                      <div className="flex items-center space-x-2">
                        <div className="border border-gray-300 rounded-lg p-2 text-gray-700 font-medium w-16 text-center">
                          {item.quantity}
                        </div>
                      </div>

                      <div className="text-lg font-bold text-gray-900 w-20 text-right">
                        ${(item.price * item.quantity).toFixed(2)}
                      </div>

                      <button className="text-red-500 hover:text-red-700 transition-colors">
                        <svg
                          className="w-5 h-5"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          ></path>
                        </svg>
                      </button>
                    </div>
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
