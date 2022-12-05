import React from 'react';
/* import { Link } from 'react-router-dom'; */
import '../App.css';

function BibEntry(props){
    return(
        <div className="bibentry">
            <p id="citation">{props.citation}</p>
            <p className="anno" id="anno1">{props.anno1}</p>
            <p className="anno" id="anno2">{props.anno2}</p>
            <p className="anno" id="anno3">{props.anno3}</p>
            <p className="anno" id="anno4">{props.anno4}</p>
        </div>
    )
}

export default BibEntry;
