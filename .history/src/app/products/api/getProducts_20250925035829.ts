export async function getProducts() : Promise<["num"]> {
    try {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
    } catch (err) { }
}