export default function Home () {
   return (
     <div className="flex flex-col min-h-screen">
      {/* نوار ناوبری (Navbar) */}
      <nav className="bg-white shadow-md p-4 flex justify-between items-center fixed top-0 left-0 w-full z-10">
        <div className="text-2xl font-bold text-gray-800">
          <a href="/">فروشگاه من</a>
        </div>
        <ul className="flex space-x-6 text-lg">
          <li>
            <a href="/products" className="text-gray-600 hover:text-gray-900 transition-colors">محصولات</a>
          </li>
          <li>
            <a href="/about" className="text-gray-600 hover:text-gray-900 transition-colors">درباره ما</a>
          </li>
          <li>
            <a href="/contact" className="text-gray-600 hover:text-gray-900 transition-colors">تماس با ما</a>
          </li>
          <li>
            <a href="/cart" className="text-blue-600 hover:text-blue-800 transition-colors">سبد خرید</a>
          </li>
        </ul>
      </nav>

      {/* بخش اصلی (Main Content) */}
      <main className="flex-grow pt-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto py-8">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-center text-gray-900 mb-4">
            به فروشگاه ما خوش آمدید!
          </h1>
          <p className="text-lg text-center text-gray-600 mb-10">
            بهترین محصولات ما را کشف کنید.
          </p>

          {/* لیست محصولات (Product Cards) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* کارت محصول ۱ */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <img src="https://via.placeholder.com/400" alt="محصول ۱" className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">لباس</h3>
                <p className="text-lg text-gray-600 font-bold mb-4">$25.00</p>
                <button className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition-colors">
                  افزودن به سبد خرید
                </button>
              </div>
            </div>

            {/* کارت محصول ۲ */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <img src="https://via.placeholder.com/400" alt="محصول ۲" className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">کیف</h3>
                <p className="text-lg text-gray-600 font-bold mb-4">$60.00</p>
                <button className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition-colors">
                  افزودن به سبد خرید
                </button>
              </div>
            </div>

            {/* کارت محصول ۳ */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <img src="https://via.placeholder.com/400" alt="محصول ۳" className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">کفش</h3>
                <p className="text-lg text-gray-600 font-bold mb-4">$80.00</p>
                <button className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition-colors">
                  افزودن به سبد خرید
                </button>
              </div>
            </div>

            {/* کارت محصول ۴ */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105">
              <img src="https://via.placeholder.com/400" alt="محصول ۴" className="w-full h-48 object-cover" />
              <div className="p-4 text-center">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">ساعت</h3>
                <p className="text-lg text-gray-600 font-bold mb-4">$120.00</p>
                <button className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition-colors">
                  افزودن به سبد خرید
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* فوتر (Footer) */}
      <footer className="bg-gray-800 text-white text-center p-6 mt-10">
        <p>&copy; 2024 فروشگاه من. تمام حقوق محفوظ است.</p>
      </footer>
    </div>
   )
}