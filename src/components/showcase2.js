import React, { Component } from "react";

import "./../styles/main.css";

export default class Showcase2 extends Component {
    render() {
        return (
            <div className="showcase">
                <img src={require("./../images/ChimeraOrtho/Chimera Ortho on laptop.jpg")} alt="cover" />
            </div>
        );
    }
}
