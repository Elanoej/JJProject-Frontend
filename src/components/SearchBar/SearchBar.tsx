import { ChangeEvent, useState } from 'react'
import { MdSearch } from 'react-icons/md'

import './SearchBar.css'

export function SearchBar(){
    
    const [search, setSearch] = useState('');

    const handleOnChange = (event: ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value)
    }

    return(
        <div className='searchbar-container'>
            <form className='form-container' action={"./#/search/" + search}>
                <input type="search" placeholder='Find something by name' value={search} onChange={handleOnChange}/>
                <button type='submit' ><MdSearch/></button>
            </form>
        </div>
        
    )
}