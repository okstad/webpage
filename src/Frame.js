import React, { Component } from "react";
import {
    Route,
    NavLink,
    HashRouter
} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact";

class Frame extends Component {
    render() {
        return (
            <HashRouter>
                <div>
                    <h1>En temporär titel</h1>
                    <ul className="header">
                        <li><NavLink to="/">Hem</NavLink></li>
                        <li><NavLink to="/om-foretaget">Om företaget</NavLink></li>
                        <li><NavLink to="/kontakt">Kontakt</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route path="/" component={Home}/>
                        <Route path="/om-foretaget" component={About}/>
                        <Route path="/kontakt" component={Contact}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Frame;