import axios from "axios"

export interface DataType {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string

}
export async function getProducts(): Promise<DataType[]> {
    try {
        const res = await axios.get('https://fakestoreapi.com/products')
        if (!res.) throw new Error("cant fetch data")
        const data = await res.json()
        return data as DataType[]
    } catch (err) {
       return []
    }
    
}