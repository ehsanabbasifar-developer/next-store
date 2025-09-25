import { DataType } from "../../api/getProducts";

export async function getProduct (id : number) :Promise<DataType> {
    try {
        const res =await fetch(`https://fakestoreapi.com/products/${id}`)
        if (!res.ok) throw new Error("cant fetch data of product")
    } catch (err) {}
}