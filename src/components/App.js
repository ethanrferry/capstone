import React from "react";
import { connect } from 'redux-bundler-react';

import "./../styles/main.css";
import HeaderLogo from "./headerLogo";
import SearchBar from "./searchbar";
import Signin from "./signin";
import NavBar from "./navBar";


const App = ({ doUpdateUrl, route }) => {

    const Page = route;

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
                    <Page />
                </div>
            </div>
        );
    
}
 export default connect(
     'doUpdateUrl',
     'selectRoute',
     App
 )