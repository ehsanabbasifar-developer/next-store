import Link from "next/link";

export default function MainBar() {
  return (
    <main className="flex-grow pt-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto py-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Welcome to MyStore!
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We offer a curated selection of high-quality products for every
            lifestyle. From timeless fashion to modern gadgets, discover items
            that are made to last.
          </p>
        </div>

        {/* Product Categories Section (using Flexbox) */}
        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
          {/* Category Card 1 */}
          <Link
            href="/products"
            className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg w-full md:w-1/3 transition-transform duration-300 hover:scale-105"
          >
            <img
              src=""
              alt="Apparel"
              className="w-32 h-32 rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Apparel
            </h3>
            <p className="text-gray-600 text-sm">
              Find your perfect style with our latest collection of clothing and
              accessories.
            </p>
          </Link>

          {/* Category Card 2 */}
          <Link
            href="/products"
            className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg w-full md:w-1/3 transition-transform duration-300 hover:scale-105"
          >
            <img
              src="https://via.placeholder.com/200"
              alt="Electronics"
              className="w-32 h-32 rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Electronics
            </h3>
            <p className="text-gray-600 text-sm">
              Stay connected with the latest gadgets and cutting-edge
              technology.
            </p>
          </Link>

          {/* Category Card 3 */}
          <Link
            href="/products"
            className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg w-full md:w-1/3 transition-transform duration-300 hover:scale-105"
          >
            <img
              src="https://via.placeholder.com/200"
              alt="Home Goods"
              className="w-32 h-32 rounded-full mb-4 object-cover"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Home Goods
            </h3>
            <p className="text-gray-600 text-sm">
              Elevate your living space with our selection of stylish and
              functional home items.
            </p>
          </Link>
        </div>

        {/* Call to Action to view products */}
        <div className="text-center">
          <Link
            href="/products"
            className="inline-block bg-blue-500 text-white text-lg font-semibold px-8 py-4 rounded-full hover:bg-blue-600 transition-colors shadow-lg"
          >
            Explore All Products
          </Link>
        </div>
      </div>
    </main>
  );
}
