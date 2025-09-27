import axios from "axios";
import { DataType } from "../../api/getProducts";
import { log } from "console";

export async function getProduct(id: string): Promise<DataType | null> {
  try {
    const res = await axios.get<DataType>(`https://fakestoreapi.com/products/${id}`)
    return res.data
  } catch (err: any) {
    if (axios.isAxiosError(err)) {
      console.log(err.message)
      return null
    } else {
      
    }
    return null
  }
}