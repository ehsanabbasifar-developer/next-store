import { DataType } from "../products/api/getProducts";

interface InitialStateType {
     
}


interface StoreType {

    //state
    product: DataType,

    //action
    addProduct: (item: DataType) => void,
    removeProduct: (id: number) => void,
    resetCart: () => void
}

const initialState : 

export const useStore = 