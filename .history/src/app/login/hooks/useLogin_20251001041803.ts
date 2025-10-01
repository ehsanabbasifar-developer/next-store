import { useMutation } from "@tanstack/react-query";
import { login, ParamterType, ReturnType } from "../api/login";

export function useLogin() {
  const   useMutation<ReturnType, Error, ParamterType>({
        mutationFn: ({ email, password }) => login({ email, password }),
        mutationKey: ["login"]
    })
}