import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function NavbarEntry(props){
    return(
        <div className="navEntry">
            <Link to={props.target} style={{textDecoration: 'none', color: '#5A5A5A'}}>{props.title}</Link>
        </div>
    )
}

export default NavbarEntry;

