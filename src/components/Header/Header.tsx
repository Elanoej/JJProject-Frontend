import "./Header.css"
import Logo from "../../assets/react.svg"
import { SearchBar } from "../SearchBar/SearchBar"

function Header() {
    return (
        <nav className="navigation-header">
            <header className="header">
                <img src={Logo}/>
                <h1>JJ Eletrônica</h1>
            </header>
            <SearchBar/>
            <div className='navigation-menu'>
                <ul>
                    <li><a href="./#/" >Home</a></li>
                    <li><a href="./#/loja" >Loja</a></li>
                    <li><a href="./#/clientes" >Clientes</a></li>
                </ul>
            </div>
        </nav> 
    )
}

export default Header