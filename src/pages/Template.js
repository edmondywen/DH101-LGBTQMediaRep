import '../App.css';
import React from 'react';
import Navbar from '../components/Navbar';

function Template({children}){
    return(
        <div id="main">
            <Navbar></Navbar>
            {children}
        </div>
    )
}

export default Template;