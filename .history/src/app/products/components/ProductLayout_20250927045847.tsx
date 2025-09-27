import Link from "next/link";
import { DataType } from "../api/getProducts";

interface Props {
  product: DataType;
}

export default function ProductLayout({ product }: Props) {
  const addProduct = useStore
  return (
    <Link
      href={`/products/${product.id}`}
      className="flex flex-col justify-between items-center p-6 bg-white rounded-lg shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 transition-transform duration-300 hover:scale-105"
    >
      <div>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover rounded-lg mb-4"
        />
        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          {product.title}
        </h3>
        <p className="text-lg text-gray-600 font-bold mb-4">
          ${product.price.toFixed(2)}
        </p>
      </div>
      <button className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition-colors mt-4">
        Add to Cart
      </button>
    </Link>
  );
}
