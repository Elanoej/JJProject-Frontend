import axios, { AxiosPromise } from "axios"
import { useQuery } from "@tanstack/react-query";
import { ServiceOrderData } from "../interface/ServiceOrderData";

const API_URL = "http://localhost:8080"

const fetchData = async (): AxiosPromise<ServiceOrderData[]> => {
    const response = axios.get(API_URL + "/service-order");
    return response;
}

export function useServiceOrderData(){
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['serviceOrder-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}