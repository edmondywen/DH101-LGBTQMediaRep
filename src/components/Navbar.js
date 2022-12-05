import React from 'react';
import NavbarEntry from './NavbarEntry';
import '../App.css';
import logo from '../assets/animatedicons.svg';
import { Link } from 'react-router-dom';

function Navbar(){
    return(
        <div className="navbar">
            <Link to="/"><img src={logo} id="logo" alt="the project logo which is 'animated icons' in gray cursive font"></img></Link>
            <NavbarEntry target="/critique" title="Data Critique"></NavbarEntry>
            <NavbarEntry target="/narrative" title="Narrative"></NavbarEntry>
            <NavbarEntry target="/about" title="About"></NavbarEntry>
            <NavbarEntry target="/bibliography" title="Sources"></NavbarEntry>
        </div>
    )
}

export default Navbar;