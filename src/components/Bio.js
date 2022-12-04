import React from 'react';
/* import { Link } from 'react-router-dom'; */
import '../App.css';

function Bio(props){
    return(
        <div className="bioblock">
            <img src={props.image}></img>
            <header id="bioname">{props.name}</header>
            <p id="biorole">{props.role}</p>
            <p id="bioabout">{props.about}</p>
        </div>
    )
}

export default Bio;
