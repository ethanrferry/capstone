import React, { Component } from "react";
import { connect } from "redux-bundler-react";
import navHelper from "internal-nav-helper";
import "./../styles/main.css";

const homepageUrl = "/";

class Fluffykins extends Component {
    render() {
        return (
            <div className="fluff">
                <a onClick={navHelper(this.props.doUpdateUrl)} href={homepageUrl}> 
                    I am fluffy.
                </a>
            </div>
        );
    }
}

export default connect (
    "doUpdateUrl",
    Fluffykins
)