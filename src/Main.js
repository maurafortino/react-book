import React, { Component } from "react";
import {
    Route,
    HashRouter
} from "react-router-dom";
import Search from "../src/pages/Search/index";
import Saved from "../src/pages/Saved/index";
import NavBar from "../src/components/Navbar/index";
import "./main.css";
import Header from "../src/components/Header/index"

class Main extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <ul className="header">
                        <NavBar/>
                    </ul>
                    <Header />
                    <div className="content">
                        <Route exact path="/" component={Search} />
                        <Route path="/search" component={Search} />
                        <Route path="/saved" component={Saved} />
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;