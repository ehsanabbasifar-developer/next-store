interface DataType {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string

}
export async function getProducts(): Promise<DataType[]> {
    try {
        const res = await fetch('https://fakestoreapi.com/products')
        if (!res.ok) throw new Error("cant fetch data")
        const data = await res.json()
         return data
    } catch (err : E) {
        console.log(err.message)
     }
    
}