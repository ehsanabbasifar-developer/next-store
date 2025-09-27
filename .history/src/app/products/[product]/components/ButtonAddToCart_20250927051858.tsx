"use client";

import { useStore } from "@/app/zustand/store";

export default function ButtonAddToCart() {
      const addProduct = useStore((state) => state.addProduct);

  return (
    <button
      onClick={() => addProduct(data)}
      type="button"
      className="w-full bg-blue-600 border border-transparent rounded-lg py-4 px-8 flex items-center justify-center text-lg font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-blue-500 transition-colors duration-300 shadow-md hover:shadow-lg"
    >
      add to cart
    </button>
  );
}
