import axios from "axios"

interface ParamterType {
    email: string,
    password: string
}

interface R
export async function login({ email, password }: ParamterType) :Promise<> {
    try {
        const response = await axios.post("https://api.escuelajs.co/api/v1/auth/login"
            , { email, password }, { withCredentials: true })
            return response.data
    } catch (err) { 

    }
}