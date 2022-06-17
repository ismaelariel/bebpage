import React from "react";
import {NavLink} from "react-router-dom";

import logo from "./imgs/logo-mini.jpeg";
import "./HeaderNav.css";

function Navbar() {
    return (
        <div className="container-header">
            <header className="header">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <NavLink className="link-logo-header" to="/">
                            <img id="icon-header" src={logo} alt="icon"/>
                        </NavLink>
                        <NavLink className="link-credential-header" to="/login">
                            Consultar Bebidas
                        </NavLink>
                    </div>
                </nav>
            </header>
        </div>
    );
}

export default Navbar;

{/* <span> &#10095;</span> */}