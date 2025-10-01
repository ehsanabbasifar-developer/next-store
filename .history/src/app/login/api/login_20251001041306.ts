import axios from "axios"

interface ParamterType {
    email: string,
    password: string
}

interface ReturnType {
    access_token: string,
    refresh_token: string
}
export async function login({ email, password }: ParamterType): Promise<ReturnType | null> {
    try {
        const response = await axios.post<ReturnType>("https://api.escuelajs.co/api/v1/auth/login"
            , { email, password }, { withCredentials: true })
        return response.data
    } catch (err) {

    }
}