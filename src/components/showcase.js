import React, { Component } from 'react';

import "./../styles/main.css";

export default class Showcase extends Component {
    render() {
        return (
            <div className="showcase">
                {/* <div className="chimeracover"> */}
                    <img src={require('./../images/ChimeraOrtho/chimeracover.jpg')} alt="cover"/>  
                {/* </div> */}
            </div>
        );
    }
}