import axios from "axios";

export interface ParamterType {
    username: string;
    password: string;
}

export interface ReturnType {
    token: string;
    
}

export async function login({ email, password }: ParamterType): Promise<ReturnType> {
    const response = await axios.post<ReturnType>(
        "https://fakestoreapi.com/auth/login",
        { email, password }, { withCredentials: true }
    );
    return response.data;
}
