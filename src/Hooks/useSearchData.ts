import axios, { AxiosPromise } from "axios"
import { useQuery } from "@tanstack/react-query";
import { API_URL } from "../Utils/Utils";
import { SearchData } from "../interface/SearchData";

const fetchData = async (pathVariable: string): AxiosPromise<SearchData[]> => {
    const response = axios.get(API_URL + "/search/" + pathVariable);
    return response;
}

export function useSearchData(pathVariable: string){
    const query = useQuery({
        queryKey: ['search-data', pathVariable],
        queryFn: ({queryKey}) => fetchData(queryKey[1]),
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}