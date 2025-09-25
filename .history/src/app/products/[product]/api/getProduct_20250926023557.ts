import { DataType } from "../../api/getProducts";

export async function getProduct (id : number) :Promise<DataType> {
    try {
        const res = fetch(`https://fakestoreapi.com/products/${id}`)
    } catch (err) {}
}