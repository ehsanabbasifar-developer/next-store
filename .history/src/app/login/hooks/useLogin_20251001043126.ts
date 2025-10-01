import { useMutation } from "@tanstack/react-query";
import { login, ParamterType, ReturnType } from "../api/login";
import toast from "react-hot-toast";
import { useRouter } from "next/router";

interface LoginType {
    mutateLogin :
}

export function useLogin() {
    const router = useRouter()
    const { mutate: mutateLogin, error, data } = useMutation<ReturnType, Error, ParamterType>({
        mutationFn: ({ email, password }) => login({ email, password }),
        mutationKey: ["login"],
        onSuccess: () => {
            toast.success("You have successfully logged in")
            router.push("/products")
        }
    });

    return { mutateLogin, error, data };
}
