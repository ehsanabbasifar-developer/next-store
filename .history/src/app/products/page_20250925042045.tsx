import Footer from "../features/footer/Footer";
import Navbar from "../features/header/NavBar";
import { getProducts } from "./api/getProducts";

export default async function ProductsPage() {
  const products = await getProducts();
  return (
    <div className="flex flex-col min-h-screen font-sans antialiased">
      <header>
        <Navbar />
      </header>

      <main className="flex-grow pt-8 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto py-8">
          <div className="text-center mb-10">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mt-8 mb-4">
              All Products
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Browse our full collection of high-quality items.
            </p>
          </div>

          <div className="flex flex-wrap items-stretch justify-center gap-6">
            {products.map((product) => (
 
              <div
                key={product.id}
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
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}