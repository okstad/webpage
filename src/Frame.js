import React, { Component } from "react";

class Frame extends Component {
    render() {
        return (
            <div>
                <h1>En temporär titel</h1>
                <ul className="header">
                    <li><a href="/">Hem</a></li>
                    <li><a href="/om-foretaget">Om företaget</a></li>
                    <li><a href="/kontakt">Kontakt</a></li>
                </ul>
                <div className="content">

                </div>
            </div>
        );
    }
}

export default Frame;