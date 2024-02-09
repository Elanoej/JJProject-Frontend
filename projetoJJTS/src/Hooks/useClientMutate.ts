import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ClientData } from "../interface/ClientData";
import axios, { AxiosPromise } from "axios";

const API_URL = "http://localhost:8080"

export function useClientMutate(){
    const queryClient = useQueryClient()
    const mutate = useMutation({
        mutationFn: postClient,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['client-data'])
        }
    })

    return mutate
}

const postClient = async (data: ClientData): AxiosPromise<any> => {
    return axios.post(API_URL + "/client", data);
}