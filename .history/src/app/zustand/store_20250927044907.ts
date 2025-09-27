import { create } from "zustand";
import { DataType } from "../products/api/getProducts";

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

export const useStore = create<StoreType>()()