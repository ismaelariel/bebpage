import React from "react";

import "./Footer.css";

function Footer() {
    const datecopyright = new Date();
    const dateyear = datecopyright.getFullYear();

    return(
        <footer className="footer">
            <div className="footer-container">
                <span id="footer-text-info">Copyright © {dateyear} Page Bebidas</span>
            </div>
        </footer>
    );
}

export default Footer;
