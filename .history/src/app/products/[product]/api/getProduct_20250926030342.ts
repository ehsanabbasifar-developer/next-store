import { DataType } from "../../api/getProducts";

export async function getProduct(id: string): Promise<DataType | null> {
    try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}l`)
        if (!res.ok) throw new Error("cant fetch data of product")
        const data = await res.json()
        return data as DataType
    } catch (err) {
        if (err instanceof Error) {
            console.error(err.message)
            return null
        } else {
            console.error("cant fetch data of product")
            return null
        }
    }
}