import React from 'react';
/* import { Link } from 'react-router-dom'; */
import '../App.css';

function BibEntry(props){
    return(
        <div className="bibentry">
            <p id="citation">{props.citation}</p>
            <p id="annotation">{props.annotation}</p>
        </div>
    )
}

export default BibEntry;
