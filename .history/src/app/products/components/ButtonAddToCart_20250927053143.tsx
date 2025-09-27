"use client";

import { useStore } from "@/app/zustand/store";
import { DataType } from "../api/getProducts";

interface Props {
  product: DataType;
}
export default function ButtonAddToCart({ product }: Props) {
  const addProduct = useStore((state) => state.addProduct);
  function handleClick ():void {
    
  }
  return (
    <button
      onClick={() => addProduct(product)}
      className="cursor-pointer w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition-colors mt-4"
    >
      Add to Cart
    </button>
  );
}
