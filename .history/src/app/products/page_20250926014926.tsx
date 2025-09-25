import Footer from "../features/footer/Footer";
import Navbar from "../features/header/NavBar";
import { getProducts } from "./api/getProducts";
import ProductLayout from "./components/ProductLayout";
interface SearchParamsType  {
 page : str
}
interface Props {
  searchParams : 
}

export default async function ProductsPage({searchParams}  : Props) {
  const page = searchParams.page
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
              <ProductLayout key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
