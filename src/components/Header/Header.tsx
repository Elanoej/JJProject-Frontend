import "./Header.css"
import Logo from "../../assets/react.svg"

function Header() {
    return (
        <nav className="navigation-header">
            <header className="header">
                <img src={Logo}></img>
                <h1>JJ Eletrônica</h1>
            </header>
            <div className='navigation-menu'>
                <ul><li><a href="/" >Home</a></li></ul>
                <ul><li><a href="/loja" >Loja</a></li></ul>
                <ul><li><a href="/clientes" >Clientes</a></li></ul>
            </div>
        </nav> 
    )
}

export default Header