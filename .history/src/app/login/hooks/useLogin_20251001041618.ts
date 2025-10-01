import { useMutation } from "@tanstack/react-query";
import { ParamterType, ReturnType } from "../api/login";

export function useLogin () {
    useMutation<ReturnType ,Error , ParamterType>()
}