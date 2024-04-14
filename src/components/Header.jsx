import React from "react";
import Navigation from "./Navigation";
import { Link } from "react-router-dom";

function Header() {
    return(
        <>
            <header>
                <h1><Link to="/">Aplikasi Catatan</Link></h1>
                <nav className="navigation">
                    <ul>
                        <li><Navigation/></li>
                    </ul>
                </nav>
            </header>
        </>
    )
}

export default Header;