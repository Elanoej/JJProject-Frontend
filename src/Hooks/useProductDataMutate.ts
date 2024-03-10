import axios, { AxiosPromise } from "axios"
import { ProductData } from "../interface/ProductData";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { API_URL } from "../Utils/Utils";

const postData = async (data: ProductData): AxiosPromise<any> => {
    return axios.post(API_URL + "/product", data);
}

const putData = async (data: ProductData): AxiosPromise<any> => {
    return axios.put(API_URL + "/product", data);
}

const deleteData = async (data: ProductData): AxiosPromise<any> => {
    return axios.delete(API_URL + "/product/" + data.id);
}

export function useProductDataMutate(){
    const queryClient = useQueryClient()
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['product-data'])
        }
    })

    return mutate
}

export function useProductDataUpdate(){
    const queryClient = useQueryClient()
    const mutate = useMutation({
        mutationFn: putData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['product-data'])
        }
    })

    return mutate
}

export function useProductDataDelete(){
    const queryClient = useQueryClient()
    const mutate = useMutation({
        mutationFn: deleteData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries(['product-data'])
        }
    })

    return mutate
}