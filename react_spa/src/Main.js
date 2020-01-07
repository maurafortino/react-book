import React, { Component } from "react";
import {
  Route,
  NavLink,
  HashRouter
} from "react-router-dom";
import Home from "./Home";
import Saved from "./Saved";
import Search from "./Search";
 
class Main extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>Simple SPA</h1>
          <ul className="header">
            <li><NavLink to="/">Google Book Search</NavLink></li>
            <li><NavLink to="/Saved">Saved</NavLink></li>
            <li><NavLink to="/Search">Search</NavLink></li>
          </ul>
          <div className="content">
          <Route path="/" component={Home}/>
            <Route path="/Saved" component={Saved}/>
            <Route path="/Search" component={Search}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Main;