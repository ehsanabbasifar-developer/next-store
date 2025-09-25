import React from "react";
import Head from "next/head";

interface ProductType {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

const dummyProduct: ProductType = {
  id: 1,
  title: "Premium Men's T-Shirt",
  price: 22.99,
  description:
    "A comfortable and stylish t-shirt made from 100% organic cotton. Perfect for everyday wear.",
  category: "men's clothing",
  image: "https://via.placeholder.com/600",
};

interface Props {
  para
}

export default function Product() {
  const product = dummyProduct;

  return (
    <div className="flex flex-col min-h-screen font-sans antialiased">
      <Head>
        <title>{product.title} - MyStore</title>
        <meta name="description" content={product.description} />
      </Head>

      <main className="flex-grow py-12 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-start">
            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg bg-gray-200">
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-full object-center object-cover"
              />
            </div>

            <div className="mt-10 lg:mt-0">
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
                {product.title}
              </h1>

              <div className="mt-3">
                <h2 className="sr-only">Product information</h2>
                <p className="text-3xl text-gray-900 font-bold">
                  ${product.price.toFixed(2)}
                </p>
              </div>

              <div className="mt-6">
                <h3 className="sr-only">Description</h3>
                <p className="text-base text-gray-700">{product.description}</p>
              </div>

              <div className="mt-8">
                <button
                  type="button"
                  className="w-full bg-blue-600 border border-transparent rounded-md py-3 px-8 flex items-center justify-center text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-blue-500 transition-colors"
                >
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
