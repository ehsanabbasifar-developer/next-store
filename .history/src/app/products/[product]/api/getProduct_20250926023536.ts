import { DataType } from "../../api/getProducts";

export function getProduct (id : number) :Promise<DataType> {
    try {
        const res = fetch("https://fakestoreapi.com/products/1")
    } catch (err) {}
}