import axios from "axios";
import { DataType } from "../../api/getProducts";

export async function getProduct(id: string): Promise<DataType | null> {
    try {
        const res = await axios.get<DataType>(`https://fakestoreapi.com/products/${id}`)
        return res.
    } catch (err) {
      return null
    }
}