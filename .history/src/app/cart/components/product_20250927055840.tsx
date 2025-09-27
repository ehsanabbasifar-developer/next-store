import { ProductType, useStore } from "@/app/zustand/store";

interface Props {
  item: ProductType;
}
export default function Product({ item }: Props) {
    const removeProduct = useStore((state) => state.removeProduct)
    function handleRemoveItem ()
  return (
    <div className="flex items-center p-6 sm:p-8 space-x-4">
      <div className="flex-shrink-0">
        <img
          src={item.image}
          alt={item.title}
          className="w-20 h-20 object-cover rounded-md"
        />
      </div>

      <div className="flex-grow">
        <h2 className="text-lg font-semibold text-gray-900">{item.title}</h2>
        <p className="text-gray-600">${item.price.toFixed(2)}</p>
      </div>

      <div className="text-lg font-bold text-gray-900 w-20 text-right">
        ${(item.price * item.quantity).toFixed(2)}
      </div>

      <button className="text-red-500 hover:text-red-700 transition-colors">
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
          ></path>
        </svg>
      </button>
    </div>
  );
}
