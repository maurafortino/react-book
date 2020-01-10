import React from 'react';
import { NavLink } from 'react-router-dom';


function NavBar() {
    return (
        <nav>
            <NavLink
                className="navbar-brand"
                to="/">
                Google Books
                </NavLink>
            <NavLink
                to="/search"
                className="nav-link">
                Search
            </NavLink>
            <NavLink
                to="/saved"
                className="nav-link">
                Saved
            </NavLink>
        </nav>

    )
};

export default NavBar