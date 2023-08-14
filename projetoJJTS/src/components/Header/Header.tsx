import "./Header.css"
import Logo from "../../assets/react.svg"

function Header() {
    return (
        <header className="header">
            <img src={Logo}></img>
            <h1>JJ Eletrônica</h1>
        </header>
    )
}

export default Header