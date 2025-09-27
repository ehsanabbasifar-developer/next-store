import { create } from "zustand";
import { persist } from "zustand/middleware";
import { DataType } from "../products/api/getProducts";


interface ProductType extends DataType {
    quantity: number
}
interface InitialStateType {
    product: ProductType[],
}


interface StoreType {

    //state
    product: ProductType[],

    //action
    addProduct: (item: DataType) => void,
    removeProduct: (id: number) => void,
    resetCart: () => void
}

const initialState: InitialStateType = {
    product: []
}

export const useStore = create<StoreType>()(
    persist((set) => ({
        ...initialState,
        addProduct: (item) =>
            set((state) => ({ product: [...state.product, state.product] })),
        removeProduct: (id) =>
            set((state) => ({ product: state.product.filter((item) => item.id !== id) })),
        resetCart: () =>
            set((state) => ({ product: [] }))

    }), {
        name: 'zustand-store',
        partialize: (state) => ({ product: state.product })
    })
)