export async function getProducts() : Promise<[number]> {
    try {
        const res = await fetch('https://fakestoreapi.com/products')
        if (!res.ok) throw new err
        const data = await res.json()
    } catch (err) { }
    return [2]
}