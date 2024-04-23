import React, { useState } from "react";
import { NavLink } from 'react-router-dom';

function Nav() {

    const routes = [
        { path: "/", name: "Accueil" },
        { path: "/", name: "Compétences", hasSubRoutes: true },
        { path: "/contact", name: "Contactez-moi" },
        { path: "/cv", name: "CV" },
    ];

    const subRoutes = [
        { path: "/skills/devweb", name: "Développement WEB"},
        { path: "/skills/other", name: "Autres" },
    ];

    const [showSubRoutes, setShowSubRoutes] = useState(false);
    const [showNav, setShowNav] = useState(false);

    const toggleSubRoutes = () => {
        setShowSubRoutes(!showSubRoutes);
    };

    const toggleNav = () => {
        setShowNav(!showNav);
    };

    return (
        <nav className="nav">
            <i className="fa-solid fa-bars nav--icon" onClick={toggleNav}></i>
            <div className={`nav__menu${showNav ? ' nav--open' : ''}`}>
                <ul className="nav__list"> 
                    {routes.map(route => (
                        <li key={route.path} className="nav__list__element">
                            {/* Create <a /> tag */}
                            {route.hasSubRoutes ? (
                                <>
                                    <span onClick={toggleSubRoutes} className="nav__list__element__sub">
                                        <i className={`fa-solid fa-chevron-right${showSubRoutes ? ' nav__list__element__sub--open' : ''}`}></i> {route.name}
                                    </span>
                                    {showSubRoutes && (
                                        <ul className="nav__list__element__sub-list">
                                            {subRoutes.map(subRoute => (
                                                <li key={subRoute.path} className="nav__list__element__sub-list-element">
                                                    <NavLink to={subRoute.path} activeclassname="active">
                                                        {subRoute.name}
                                                    </NavLink>
                                                </li>
                                            ))}
                                        </ul>
                                    )}
                                </>
                            ) : (
                                <NavLink to={route.path} activeclassname="active">
                                    {route.name}
                                </NavLink>
                            )}
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}

export default Nav;