import React from 'react';
import { Link } from 'react-router-dom';
//import Tableau from "tableau-react";
import Template from './Template';
import Bio from '../components/Bio';
//import Visualization from '../components/Visualization';

function About(){
    return(
        <Template>
            <div>
                <br/><br/><br/><br/><br/><br/>
                <h1>About the Authors</h1>

                {/* Framework for this will likely just be a flexbox with six elements */}
                {/* Each element will have an image two text elements below */}
                {/* One bolded one for our names, one for a summary of what we did for the project */}
                {/* I will design the componenet for this later today. - Satsuki */}
                <div id="biographies">
                    <Bio name="Ariana Castro" role="Worked on the project"></Bio>
                    <Bio name="Sara Hisamune" role="Worked on the project"></Bio>
                    <Bio name="Satsuki Liu" role="Worked on the project"></Bio>
                    <Bio name="An Nguyen" role="Worked on the project"></Bio>
                    <Bio name="Edmond Wen" role="Worked on the project"></Bio>
                    <Bio name="Maleeha Zaman" role="Worked on the project"></Bio>
                </div>
                <p>About page goes here</p>
            </div>
        </Template>
    )
}

export default About;