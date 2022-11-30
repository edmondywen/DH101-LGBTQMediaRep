import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function NavbarEntry(props){
    return(
        <div className="navEntry">
            <Link to={props.target} style={{textDecoration: 'none', color: 'black'}}>{props.title}</Link>
        </div>
    )
}

export default NavbarEntry;
