import React from "react";
import { NavLink } from 'react-router-dom';
import { navRoutes } from "./NavConfig";

function Nav() {

    return (
        <nav className="nav">
            <ul className="nav__list">
                {navRoutes.map(({ path, name }) => (
                    <li key={name} className="nav__list__element">
                        <NavLink to={path} activeclassname="active" className="nav__list__element--link">
                            {name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}

export default Nav;