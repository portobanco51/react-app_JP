import { NavLink } from "react-router-dom";

function NavBar() {
    return (
        <div>
            <ul>
                <NavLink to="/"><li>Inicio</li></NavLink>
                <NavLink to="/category/paisajes"><li>Paisajes</li></NavLink>
                <NavLink to="/item/1"><li>Cat2</li></NavLink>
            </ul>
        </div >
    )
}

export default NavBar;