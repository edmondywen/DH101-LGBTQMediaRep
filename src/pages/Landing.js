import React from 'react';
import Template from './Template';
import questions from '../assets/research-questions.svg';
import bmo from '../assets/dancingbmo1.svg';

function Landing(){
    return(
        <Template>
            <div className="landing">
                <div id="heading">
                    <div id="headingtext">
                        <h1>animated icons</h1>
                        <p>Crafted by UCLA Digital Humanities students, this narrative analyzes the progression of queer portrayals since the 1990s  using an extensive Kaggle dataset as research surrounding this topic is still limited.</p>
                    </div>
                    <img src={bmo} alt="An image of BMO, a character from adventure time, dancing" id="bmo"></img>
                </div>
                <div id="about" align="left">
                    <h1 id="aboutheading">about the project</h1>
                    <p>animated icons is a group project for an introductory Digital Humanities course taught at UCLA by Dr. Ashley Sanders Garcia in the fall quarter of 2022. In addition to Dr. Sanders, our team owes much of our work to the guidance of Grace Skalinder.</p>
                    <p>Students are tasked to create a web-based mini-site that investigates an openly accessible dataset from multiple angles via digital methodologies (e.g., data visualization through charts and graphs, geospatial visualization, statistical analysis, etc.) and a Humanities lens.</p>
                    <p>Our team selected a dataset from Kaggle that explores shows with LGBTQIA+ representation and separately delves into queer characters appearing in these series. For our geospatial component, we created our own dataset employing a CNN timeline of landmark LGBTQIA+ rights events in the United States.</p>
                </div>
                <div id="questionblock">
                    <img src={questions} alt="research questions" id="questions"/>
                </div>
            </div>
        </Template>
    )
}

export default Landing;