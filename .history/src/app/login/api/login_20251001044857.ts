import axios from "axios";

export interface ParamterType {
  email: string;
  password: string;
}

export interface ReturnType {
  access_token: string;
  refresh_token: string;
}

export async function login({ email, password }: ParamterType): Promise<ReturnType> {
  const response = await axios.post<ReturnType>(
    "https://fakestoreapi.com/auth/login",
    { email, password } , credential
  );
  return response.data;
}
