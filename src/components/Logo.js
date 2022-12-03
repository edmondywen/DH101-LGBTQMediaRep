import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

function Logo(props){
    return(
        <div id="logo">
            <Link to='/' style={{textDecoration: 'none', color: 'black'}}>{props.title}</Link>
        </div>
    )
}

export default Logo;
