"use client";

import { useStore } from "@/app/zustand/store";
import { DataType } from "../api/getProducts";
import toast from "react-hot-toast";

interface Props {
  product: DataType;
}
export default function ButtonAddToCart({ product }: Props) {
  const addProduct = useStore((state) => state.addProduct);
  function handleClick ():void {
    addProduct(product)
    toast.success("Successfully added to cart")
  }
  return (
    <button
      onClick={handleClick}
      className="cursor-pointer w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition-colors mt-4"
    >
      Add to Cart
    </button>
  );
}
