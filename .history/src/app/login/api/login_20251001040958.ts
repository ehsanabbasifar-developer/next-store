import axios from "axios"

interface ParamterType {
    email: string,
    password: string
}
export async function login({ email, password }: ParamterType) {
    try {
        const response = await axios.post("https://api.escuelajs.co/api/v1/auth/login", { email, password } , {cre})
    } catch (err) { }
}