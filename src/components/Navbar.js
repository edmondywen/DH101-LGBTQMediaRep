import React from 'react';
import NavbarEntry from './NavbarEntry';
import Logo from './Logo';
import '../App.css';

function Navbar(){
    return(
        <div className="navbar">
            <Logo title="animated icons"></Logo>
            <NavbarEntry target="/analysis" title="Narrative"></NavbarEntry>
            <NavbarEntry target="/analysis" title="Data Critique"></NavbarEntry>
            <NavbarEntry target="/analysis" title="About"></NavbarEntry>
            <NavbarEntry target="/analysis" title="Bibliography"></NavbarEntry>
        </div>
    )
}

export default Navbar;