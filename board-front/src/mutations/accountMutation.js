import { useMutation } from "@tanstack/react-query"
import { updateProfileImgApi } from "../apis/userApi";

export const useUpdateProfileImgMutation = () => useMutation({
    mutationKey: ["useUpdateProfileImgMutation"],
    mutationFn: updateProfileImgApi,
    retry: 0,
});