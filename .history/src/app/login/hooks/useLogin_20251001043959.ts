import { UseMutateFunction, useMutation } from "@tanstack/react-query";
import { login, ParamterType, ReturnType } from "../api/login";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

interface LoginType {
    mutateLogin: UseMutateFunction<ReturnType, Error, ParamterType, unknown>,
    error: Error | null,
    isPending : boolean
}

export function useLogin(): LoginType {
    const router = useRouter()
    const { mutate: mutateLogin, error, data , isPending } = useMutation<ReturnType, Error, ParamterType>({
        mutationFn: ({ email, password }) => login({ email, password }),
        mutationKey: ["login"],
        onSuccess: (data) => {
            toast.success("You have successfully logged in")
            console.log(data.access_token , data.)
            router.push("/products")
        }
    });

    return { mutateLogin, error ,isPending};
}
