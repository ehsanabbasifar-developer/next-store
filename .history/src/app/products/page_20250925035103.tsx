import Head from 'next/head';
import React from 'react';

// This is a placeholder for your product data.
// You will replace this with data fetched from an API in a getServerSideProps or similar function.
const dummyProducts = [
  { id: 1, name: 'T-shirt', price: 25.00, image: 'https://via.placeholder.com/400' },
  { id: 2, name: 'Jeans', price: 60.00, image: 'https://via.placeholder.com/400' },
  { id: 3, name: 'Sneakers', price: 80.00, image: 'https://via.placeholder.com/400' },
  { id: 4, name: 'Jacket', price: 120.00, image: 'https://via.placeholder.com/400' },
  { id: 5, name: 'Watch', price: 150.00, image: 'https://via.placeholder.com/400' },
  { id: 6, name: 'Hat', price: 20.00, image: 'https://via.placeholder.com/400' },
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans antialiased">
      <Head>
        <title>All Products - MyStore</title>
        <meta name="description" content="Explore our complete collection of products." />
      </Head>

      <main className="flex-grow pt-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto py-8">
          <div className="text-center mb-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              All Products
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our full collection of high-quality items.
            </p>
          </div>

          {/* Product Cards Container (Flexbox Layout) */}
          <div className="flex flex-wrap justify-center items-center gap-6">
            {dummyProducts.map((product) => (
              <div
                key={product.id}
                className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 transition-transform duration-300 hover:scale-105"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                <p className="text-lg text-gray-600 font-bold mb-4">${product.price.toFixed(2)}</p>
                <button className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition-colors">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
      
      {/* Note: In a real app, you would include your Navbar and Footer components here */}
    </div>
  );
}