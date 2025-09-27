"use client"

import { DataType } from "../api/getProducts"

interface Props {
    product : DataType
}
export default function ButtonAddToCart ({product}: Props) {
      const addProduct = usesto((state) => state.addProduct);

    return (
  <button
        onClick={() => addProduct(product)}
        className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition-colors mt-4"
      >
        Add to Cart
      </button>
    )
}