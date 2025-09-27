import Navbar from "@/app/features/header/NavBar";
import { getProduct } from "./api/getProduct";
import Footer from "@/app/features/footer/Footer";
import Link from "next/link";
import { useStore } from "@/app/zustand/store";

interface ParamsType {
  product: string;
}
interface Props {
  params: ParamsType;
}

export default async function Product({ params }: Props) {
  const { product } = params;
  const data = await getProduct(product);
  const addProduct = useStore((state) => state.addProduct)

  if (!data) {
    return (
      <div className="flex flex-col min-h-screen">
        <header>
          <Navbar />
        </header>

        <main className="flex-grow relative flex">
          <div className="text-center py-20 bg-gray-50 mt-15 absolute inset-0 items-center justify-center">
            <h1 className="text-4xl font-bold text-gray-900">
              didnt find product
            </h1>
            <p className="mt-4 text-gray-600">
              Product data could not be retrieved from the server, please try
              again.
            </p>
             <Link href="/products" className="mt-6 inline-block">
              <span className="bg-blue-600 text-white font-medium py-2 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300">
                Go back to products
              </span>
            </Link>
          </div>
        </main>

        <Footer />
      </div>
    );
  }
  return (
    <div className="flex flex-col min-h-screen font-sans antialiased">
      <header>
        <Navbar />
      </header>
      <main className="flex-grow py-16 mt-14 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
            <div className="flex justify-center lg:justify-end">
              <div className="w-full max-w-sm max-h-[500px] overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
                <img
                  src={data.image}
                  alt={data.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>

            <div className="mt-12 lg:mt-0 lg:p-4">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
                {data.title}
              </h1>
              <div className="mt-4">
                <p className="text-3xl text-gray-900 font-bold">
                  ${data.price.toFixed(2)}
                </p>
              </div>
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900">
                  description
                </h3>
                <p className="mt-2 text-base text-gray-700 leading-relaxed">
                  {data.description}
                </p>
              </div>
              <div className="mt-10">
                <button
                  onClick={() =>add}
                  type="button"
                  className="w-full bg-blue-600 border border-transparent rounded-lg py-4 px-8 flex items-center justify-center text-lg font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-blue-500 transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
