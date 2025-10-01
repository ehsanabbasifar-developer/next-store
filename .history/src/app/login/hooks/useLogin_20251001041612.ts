import { useMutation } from "@tanstack/react-query";
import { ReturnType } from "../api/login";

export function useLogin () {
    useMutation<ReturnType ,Error , Para>()
}