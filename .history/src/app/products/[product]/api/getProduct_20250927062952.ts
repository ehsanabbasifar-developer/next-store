import { DataType } from "../../api/getProducts";

export async function getProduct(id: string): Promise<DataType | null> {
    try {
        const res = await fetch(`https://fakestoreapi.com/products/${id}`)
        const data = await res.json()
        return data as DataType
    } catch (err) {
      return null
    }
}