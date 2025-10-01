import { useMutation } from "@tanstack/react-query";
import { login, ParamterType, ReturnType } from "../api/login";
import toast from "react-hot-toast";

export function useLogin() {
    const { mutate: mutateLogin, error, data } = useMutation<ReturnType, Error, ParamterType>({
        mutationFn: (variables) => login(variables),
        mutationKey: ["login"] و, 
        onSuccess :  () => {
            toast.success
        }
    });

    return { mutateLogin, error, data };
}
