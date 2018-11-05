import React, { Component } from "react";
import { connect } from "redux-bundler-react";
import navHelper from "internal-nav-helper";

class NavBar extends Component {
    render() {
        const navItems = [
            { url: "/", label: "Showcase", key: 1 },
            { url: "/showcase2", label: "Showcase2", key: 2 },
            { url: "/showcase3", label: "Showcse3", key: 3 }
        ];

        return navItems.map(element => {
            return (
                <div key={element.key} item>

                    <a onClick={navHelper(this.props.doUpdateUrl)} href={element.url}>

                        {element.label}

                    </a>

                </div>
            );
        });
    }
}

export default connect(
    "doUpdateUrl",
    "selectRoute",
    NavBar
);
