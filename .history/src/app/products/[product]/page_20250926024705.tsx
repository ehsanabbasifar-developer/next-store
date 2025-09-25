import { getProduct } from "./api/getProduct";

interface ParamsType {
  product: string;
}
interface Props {
  params: ParamsType;
}

export default async function Product({ params }: Props) {
  // تبدیل پارامتر string به number
  const productId = Number(params.product);

  // دریافت داده محصول
  const data = await getProduct(productId);

  // نمایش پیام خطا در صورت نبود محصول
  if (!data) {
    return (
      <div className="text-center py-20 bg-gray-50">
        <h1 className="text-4xl font-bold text-gray-900">  </h1>
        <p className="mt-4 text-gray-600">
          can not fetch data from server please try again
        </p>
      </div>
    );
  }

  return (
    <div className="flex flex-col min-h-screen font-sans antialiased">
      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-start">
            {/* بخش عکس محصول */}
            <div className="aspect-w-1 aspect-h-1 overflow-hidden rounded-xl shadow-lg transition-transform duration-300 hover:scale-105">
              <img
                src={data.image}
                alt={data.title}
                className="w-full h-full object-center object-cover"
              />
            </div>

            {/* بخش جزئیات محصول */}
            <div className="mt-12 lg:mt-0 lg:p-4">
              {/* عنوان */}
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
                {data.title}
              </h1>

              {/* قیمت */}
              <div className="mt-4">
                <p className="text-3xl text-gray-900 font-bold">
                  ${data.price.toFixed(2)}
                </p>
              </div>

              {/* توضیحات */}
              <div className="mt-8">
                <h3 className="text-lg font-semibold text-gray-900">توضیحات</h3>
                <p className="mt-2 text-base text-gray-700 leading-relaxed">
                  {data.description}
                </p>
              </div>

              {/* دکمه افزودن به سبد خرید */}
              <div className="mt-10">
                <button
                  type="button"
                  className="w-full bg-blue-600 border border-transparent rounded-lg py-4 px-8 flex items-center justify-center text-lg font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-50 focus:ring-blue-500 transition-colors duration-300 shadow-md hover:shadow-lg"
                >
                  افزودن به سبد خرید
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
