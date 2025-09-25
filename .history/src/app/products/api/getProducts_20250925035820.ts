export async function getProducts() : Pro {
    try {
        const res = await fetch('https://fakestoreapi.com/products')
        const data = await res.json()
    } catch (err) { }
}