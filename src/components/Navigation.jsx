import React from "react";
import {Link} from 'react-router-dom';


function Navigation(){
    return (
        <nav className="navigation">
            <ul>
                <li><Link to="/arsip">Arsip</Link></li>
                <li><Link to="/tambahcatatan">Tambah catatan</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation;