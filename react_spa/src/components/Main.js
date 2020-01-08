import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Jumbotron from "../src/components/Jumbotron"
import Home from "./Home";
import Saved from "./Saved";
import Search from "./Search";

class Main extends Component {
  render() {
    return (

      <HashRouter>
        <div>

          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <NavLink to="/">Google Book Search </NavLink>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <NavLink to="/Saved">Saved  <span class="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/Search">Search</NavLink>
                </li>
              </ul>
            </div>
          </nav>
          <Jumbotron />
          <div className="content">
            <Route path="/" component={Home} />
            <Route path="/Saved" component={Saved} />
            <Route path="/Search" component={Search} />
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default Main;