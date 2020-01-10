import React from "react";
import { NavLink } from 'react-router-dom';

function NavBar(props) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <NavLink className="navbar-brand" to="/">Google Books</NavLink>
      <ul className="navbar-nav">
        <li className="nav-item active">
          <NavLink className="nav-link" to="/search">Search</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/saved">Saved</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
