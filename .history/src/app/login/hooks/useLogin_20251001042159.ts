import { useMutation } from "@tanstack/react-query";
import { login, ParamterType, ReturnType } from "../api/login";

export function useLogin() {
    const { mutate: mutateLogin, error, data } = useMutation<ReturnType, Error, ParamterType>({
        mutationFn: (variables) => login(variables),
        mutationKey: ["login"] و, 
        onSuccess :  ()
    });

    return { mutateLogin, error, data };
}
