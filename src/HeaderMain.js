import React from "react";
import {NavLink} from "react-router-dom";

import "./HeaderNav.css";
import logo from "./imgs/logo-mini.jpeg";

function HeaderMain() {
    return(
        <div className="container-header">
            <header className="header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <NavLink className="link-logo-header" to="/">
                            <img id="icon-header" src={logo} alt="icon"/>
                        </NavLink>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default HeaderMain;