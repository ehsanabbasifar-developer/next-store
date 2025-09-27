import { create } from "zustand";
import { DataType } from "../products/api/getProducts";
import { persist } from "zustand/middleware";

interface InitialStateType {
    product: DataType[],
}


interface StoreType {

    //state
    product: DataType,

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
        addProduct : (item) => 
            set((state) => ({product : [...state.product , item]})) , 
        removeProduct : (id) => 
            set((state) => ({product : state.product.fil})),
        resetCart : () => ({})

    }), {
        name: 'zustand-store',
        partialize: (state) => ({ product: state.product })
    })
)