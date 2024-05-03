import { useEffect, useState } from "react"
import { useSearchData } from "../../Hooks/useSearchData"

interface SearchProps {
    pathVariable: string,
}

export function Search({pathVariable }:SearchProps){

    const [data , setData] = useState(null)
    const searchData = useSearchData(pathVariable);

    return(
        <div>
            <h1>Search screen</h1>
            <p>{pathVariable}</p>
            {searchData.data?.map(repModel =>
                <div>
                    {repModel.name}
                </div>    
            )}

        </div>
    )
}