import React, { Component } from 'react';
import { connect } from "redux-bundler-react";
import navHelper from "internal-nav-helper";

const fluffykinsUrl='/fluffykins'

class NavBar extends Component {

    render() {
        return (
            <div>
                <h2>NavBar thing</h2>
                <a onClick={navHelper(this.props.doUpdateUrl)} href={fluffykinsUrl}> 
                    To fluffy.
                </a>
            </div>
        );
    }
}

export default connect (
    "doUpdateUrl",
    "selectRoute",
    NavBar
)