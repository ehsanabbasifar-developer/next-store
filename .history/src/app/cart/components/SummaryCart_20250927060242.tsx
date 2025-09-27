interface Props {
    subtotal : number ,
    shipping : nu
}
export default function SummaryCart () {
    return (
         <div className="mt-8 lg:mt-0">
              <div className="bg-white p-8 shadow-xl rounded-xl space-y-4">
                <h2 className="text-2xl font-bold text-gray-900 border-b pb-4 mb-4">
                  Order Summary
                </h2>

                <div className="flex justify-between text-gray-700">
                  <span>Subtotal:</span>
                  <span className="font-semibold">${subtotal.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-gray-700">
                  <span>Shipping Estimate:</span>
                  <span className="font-semibold">${shipping.toFixed(2)}</span>
                </div>

                <div className="flex justify-between text-xl font-extrabold border-t pt-4 mt-4">
                  <span className="text-gray-700 ">Order Total:</span>
                  <span className="text-gray-700">${total.toFixed(2)}</span>
                </div>

                <button
                  type="button"
                  className="w-full bg-green-600 border border-transparent rounded-lg py-3 px-8 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors shadow-lg mt-6"
                >
                  Proceed to Checkout
                </button>

                <a
                  href="/products"
                  className="w-full inline-block text-center mt-3 text-blue-600 hover:text-blue-800 transition-colors text-sm font-medium"
                >
                  Continue Shopping
                </a>
              </div>
            </div>
    )
}