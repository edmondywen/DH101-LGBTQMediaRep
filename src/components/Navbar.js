import React from 'react';
import NavbarEntry from './NavbarEntry';
import Logo from './Logo';
import '../App.css';
import logo from '../assets/animatedicons.svg';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <div className="navbar">
            <Link to="/"><img src={logo} id="logo"></img></Link>
            <NavbarEntry target="/narrative" title="Narrative"></NavbarEntry>
            <NavbarEntry target="/analysis" title="Data Critique"></NavbarEntry>
            <NavbarEntry target="/about" title="About"></NavbarEntry>
            <NavbarEntry target="/bibliography" title="Bibliography"></NavbarEntry>
        </div>
    )
}

export default Navbar;