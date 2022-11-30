import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Navbar(){
    return(
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/analysis">Analysis</Link>
        </div>
    )
}

export default Navbar;