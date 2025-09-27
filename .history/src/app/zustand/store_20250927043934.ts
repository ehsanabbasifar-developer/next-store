import { DataType } from "../products/api/getProducts";

interface InitialStateType {
    product : DataType , 
}

interface ActionType {
    addProduct : (item)
}