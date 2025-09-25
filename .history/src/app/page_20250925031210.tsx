import  { useState } from 'react';

export def {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex flex-col min-h-screen font-sans antialiased">
      {/* Navbar */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center fixed top-0 left-0 w-full z-10">
        <div className="text-2xl font-bold text-gray-800">
          <a href="/">MyStore</a>
        </div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6 text-lg">
          <a href="/products" className="text-gray-600 hover:text-gray-900 transition-colors">Products</a>
          <a href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a>
          <a href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a>
          <a href="/cart" className="text-blue-600 hover:text-blue-800 transition-colors">Cart</a>
          <a href="/signin" className="bg-blue-500 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-600 transition-colors">Sign In</a>
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Content */}
      <div 
        className={`fixed inset-0 bg-white z-20 transform transition-transform duration-300 md:hidden ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className="flex justify-between items-center p-4">
          <div className="text-2xl font-bold text-gray-800">MyStore</div>
          <button onClick={toggleMenu} className="text-gray-600 focus:outline-none">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
            </svg>
          </button>
        </div>
        <ul className="flex flex-col items-center space-y-6 text-2xl mt-8">
          <li><a onClick={toggleMenu} href="/products" className="text-gray-600 hover:text-gray-900 transition-colors">Products</a></li>
          <li><a onClick={toggleMenu} href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">About</a></li>
          <li><a onClick={toggleMenu} href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">Contact</a></li>
          <li><a onClick={toggleMenu} href="/cart" className="text-blue-600 hover:text-blue-800 transition-colors">Cart</a></li>
          <li><a onClick={toggleMenu} href="/signin" className="bg-blue-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-600 transition-colors">Sign In</a></li>
        </ul>
      </div>

      {/* Main Content */}
      <main className="flex-grow pt-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto py-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
              Welcome to MyStore!
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer a curated selection of high-quality products for every lifestyle. From timeless fashion to modern gadgets, discover items that are made to last.
            </p>
          </div>

          {/* Product Categories Section (using Flexbox) */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-16">
            {/* Category Card 1 */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg w-full md:w-1/3 max-w-sm transition-transform duration-300 hover:scale-105">
              <img src="https://via.placeholder.com/200" alt="Category 1" className="w-32 h-32 rounded-full mb-4 object-cover" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Apparel</h3>
              <p className="text-gray-600 text-sm">Find your perfect style with our latest collection of clothing and accessories.</p>
            </div>

            {/* Category Card 2 */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg w-full md:w-1/3 max-w-sm transition-transform duration-300 hover:scale-105">
              <img src="https://via.placeholder.com/200" alt="Category 2" className="w-32 h-32 rounded-full mb-4 object-cover" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Electronics</h3>
              <p className="text-gray-600 text-sm">Stay connected with the latest gadgets and cutting-edge technology.</p>
            </div>

            {/* Category Card 3 */}
            <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg w-full md:w-1/3 max-w-sm transition-transform duration-300 hover:scale-105">
              <img src="https://via.placeholder.com/200" alt="Category 3" className="w-32 h-32 rounded-full mb-4 object-cover" />
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Home Goods</h3>
              <p className="text-gray-600 text-sm">Elevate your living space with our selection of stylish and functional home items.</p>
            </div>
          </div>
          
          {/* Call to Action to view products */}
          <div className="text-center">
            <a href="/products" className="inline-block bg-blue-500 text-white text-lg font-semibold px-8 py-4 rounded-full hover:bg-blue-600 transition-colors shadow-lg">
              Explore All Products
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white text-center p-6 mt-10">
        <p>&copy; 2024 MyStore. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Home;