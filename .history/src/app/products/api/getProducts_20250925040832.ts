interface DataType {
    id: number,
    title: string,
    price: number,
    description: string,
    category: string,
    image: string

}
export async function getProducts(): Promise<DataType[] | string> {
    try {
        const res = await fetch('https://fakestoreapi.com/products')
        if (!res.ok) throw new Error("cant fetch data")
        const data = await res.json()
        return data as DataType[]
    } catch (err) {
        if (err instanceof Error) {
            console.log(err.message)
            return err.message
        } else {
            console.log("unknown error")
            return.
        }
    }

}