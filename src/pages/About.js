import React from 'react';
import { Link } from 'react-router-dom';
//import Tableau from "tableau-react";
import Template from './Template';
//import Visualization from '../components/Visualization';

function About(){
    return(
        <Template>
            <div>
                <h1>About the Authors</h1>

                {/* Framework for this will likely just be a flexbox with six elements */}
                {/* Each element will have an image two text elements below */}
                {/* One bolded one for our names, one for a summary of what we did for the project */}
                {/* I will design the componenet for this later today. - Satsuki */}

                <p>About page goes here</p>
            </div>
        </Template>
    )
}

export default About;