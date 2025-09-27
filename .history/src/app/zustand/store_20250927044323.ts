import { DataType } from "../products/api/getProducts";



interface StoreType {
    //state
    product : DataType , 
      addProduct : (item : DataType) => void ,
    removeProduct : (id : number) => void , 
    resetCart : () => void
}