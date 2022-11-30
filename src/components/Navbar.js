import React from 'react';
import { Link } from 'react-router-dom';
import NavbarEntry from './NavbarEntry';
import '../App.css';

function Navbar(){
    return(
        <div className="navbar">
            <NavbarEntry target="/" title="Home"></NavbarEntry>
            <NavbarEntry target="/analysis" title="Introduction"></NavbarEntry>
            <NavbarEntry target="/analysis" title="A Closer Look"></NavbarEntry>
            <NavbarEntry target="/analysis" title="About"></NavbarEntry>
        </div>
    )
}

export default Navbar;