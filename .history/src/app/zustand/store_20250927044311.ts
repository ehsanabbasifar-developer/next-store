import { DataType } from "../products/api/getProducts";

interface InitialStateType {
    
}

interface ActionType {
    addProduct : (item : DataType) => void ,
    removeProduct : (id : number) => void , 
    resetCart : () => void
}

interface StoreType {
    product : DataType , 
}