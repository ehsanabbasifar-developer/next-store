import axios from "axios"

interface ParamterType {
    email : string , 
    password : string
}
export async function login ({email , password} : ParamterType) {
   try {
    const response = await axios.post("https://fakestoreapi.com/auth/login")
   } catch (err) {}
}