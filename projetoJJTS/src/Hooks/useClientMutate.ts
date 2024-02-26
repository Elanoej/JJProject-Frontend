import { useMutation, useQueryClient } from "@tanstack/react-query";
import { ClientData } from "../interface/ClientData";
import axios, { AxiosPromise } from "axios";
import { API_URL } from "../Utils/Utils";


const postClient = async (data: ClientData): AxiosPromise<any> => {
    return await axios.post(API_URL + "/client", data);
}

const putClient = async (data: ClientData): AxiosPromise<any> => {
    return await axios.put(API_URL + "/client", data);
}

const deleteClient = async (data: ClientData): AxiosPromise<any> => {
    return await axios.delete(API_URL + "/client/" + data.id);
}

export function useClientMutate(){
    const queryClient = useQueryClient()
    const mutate = useMutation({
        mutationFn: postClient,
        onSuccess: () => {
            queryClient.invalidateQueries(['client-data'])
        }
    })

    return mutate
}

export function useClientMutateUpdate(){
    const queryClient = useQueryClient()
    const mutate = useMutation({
        mutationFn: putClient,
        onSuccess: () => {
            queryClient.invalidateQueries(['client-data'])
        }
    })

    return mutate
}

export function useClientMutateDelete(){
    const queryClient = useQueryClient()
    const mutate = useMutation({
        mutationFn: deleteClient,
        onSuccess: () => {
            queryClient.invalidateQueries(['client-data'])
        }
    })

    return mutate
}