import { useQuery } from "@tanstack/react-query";
import axios, { AxiosPromise } from "axios";
import { API_URL } from "../Utils/Utils";

const fetchData = async (search: string): AxiosPromise<RepresetationModel[]> => {
    return axios.get(`${API_URL}/search/${search}`);
}

export function useSearchData(search: string){
    const query = useQuery({
        queryFn: () => fetchData(search),
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}