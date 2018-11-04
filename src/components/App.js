import React, { Component } from "react";
import "./../styles/main.css";
import HeaderLogo from "./headerLogo";
import SearchBar from "./searchbar";
import Signin from "./signin";
import NavBar from "./navBar";
import Showcase from "./showcase";
import Showcase2 from "./showcase2";
import Showcase3 from "./showcase3";



export default class App extends Component {
    render() {
        return (
            <div className="body">
                <div className="header">
                    <HeaderLogo />
                    <SearchBar />
                    <Signin />
                </div>

                <div className="navBar">
                  <div className='navBar-text'>
                    <NavBar/>
                  </div>
                </div>

                <div className='showcase'>
                    {/* <Showcase /> */}
                    <Showcase2 />
                    {/* <Showcase3 /> */}
                </div>
            </div>
        );
    }
}
