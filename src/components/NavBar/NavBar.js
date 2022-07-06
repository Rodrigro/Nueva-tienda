import "./NavBar.css"
import "./CartWidget"
import CartWidget from "./CartWidget";
import Logo from "./Logo";
import { Link } from "react-router-dom"



function NavBar() {
    return (
        <nav className="nav-main">
            <ul>
                <Logo/>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/category/consolas">Consolas</Link>
                </li>
                <li>
                    <Link to="/category/electrodomesticos">Elecrodomesticos</Link>
                </li>
                <li>
                    <Link to="/category/computadoras">Computadoras</Link>
                </li>
                <li>
                    <Link to="/category/Heladeras">Heladeras</Link>
                </li>
                <CartWidget/>
            </ul>
        </nav>
        
    );
}

export default NavBar;