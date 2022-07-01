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
                    <Link to="/category/drama">Ofertas</Link>
                </li>
                <li>
                    <Link to="/category/ciencia-ficcion">Elecrodomesticos</Link>
                </li>
                <li>
                    <Link to="/category/aventura">Aventura</Link>
                </li>
                <li>
                    <Link to="/category/veridica">Veridicas</Link>
                </li>
                <CartWidget/>
            </ul>
        </nav>
        
    );
}

export default NavBar;