import React, { Component } from "react";
import {
    Route,
    HashRouter
} from "react-router-dom";
import Home from "../src/pages/Home/index";
import Search from "../src/pages/Search/index";
import Saved from "../src/pages/Saved/index";
import NavBar from "../src/components/Navbar/index";

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <ul className="header">
                        <NavBar/>
                    </ul>
                    <h1>Simple SPA</h1>
                    <div className="content">
                        <Route exact path="/" component={Home} />
                        <Route path="/search" component={Search} />
                        <Route path="/saved" component={Saved} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;