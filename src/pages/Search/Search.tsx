import { useSearchData } from "../../Hooks/useSearchData"
import './Search.css'

interface SearchProps {
    pathVariable: string,
}

export function Search({pathVariable }:SearchProps){

    const searchData = useSearchData(pathVariable);

    return(
        <div>
            <h1>Search screen</h1>
            <div  className="search-div">
            {
                searchData.data?.map(searchDTO => 
                    <div className="dto-div">
                        <h2>{searchDTO.id}</h2>
                        <h3>{searchDTO.type}</h3>
                        <p>{searchDTO.name}</p>
                    </div>
                )
            }
            </div>
            

        </div>
    )
}