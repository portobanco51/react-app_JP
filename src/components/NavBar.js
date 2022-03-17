import { Link, NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <ul>
                <NavLink to="cat1"><li>Cat1</li></NavLink>
                <NavLink to="/"><li>Cat2</li></NavLink>
                <NavLink to="/carrito"><li>Cat3</li></NavLink>
            </ul>
        </div >
    )
}

export default NavBar;