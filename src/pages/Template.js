import '../App.css';
import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Template({children}){
    return(
        <div id="main">
            <Navbar></Navbar>
            {children}
            {/* <Footer></Footer> */}
        </div>
    )
}

export default Template;