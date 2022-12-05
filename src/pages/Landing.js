import React from 'react';
import Template from './Template';
import questions from '../assets/research-questions.svg';
import bmo from '../assets/dancingbmo1.svg';
import logo from '../assets/animatedicons.svg';
import owl from '../assets/owlcitylanding.svg';
import lady from '../assets/lady.svg';

function Landing(){
    return(
        <Template>
            <div className="landing">
                <div id="heading">
                    <div id="headingtext">
                        <img src={logo} alt="the project logo which is 'animated icons' in gray cursive font"></img>
                        <p>Crafted by UCLA Digital Humanities students, this narrative analyzes the progression of queer portrayal in American animated media since the 1990s using an extensive Kaggle dataset.</p>
                    </div>
                    <img src={bmo} alt="BMO, a character from adventure time, dancing" id="bmo"></img>
                </div>
                <div id="about" align="left">
                    <h1 id="landaboutheading">about the project</h1>
                    <div id="aboutcontent">
                        <div id="aboutdescription">
                            <p><span style={{color: '730BF6', 'font-weight': 'bold'}}>animated icons</span> is a group project for an introductory Digital Humanities course taught at UCLA by Dr. Ashley Sanders Garcia in the fall quarter of 2022. In addition to Dr. Sanders, our team owes much of our work to the guidance of Grace Skalinder.</p>
                            <p>Students are tasked to create a web-based mini-site that investigates an openly accessible dataset from multiple angles via digital methodologies (e.g., data visualization through charts and graphs, geospatial visualization, statistical analysis, etc.) and a Humanities lens.</p>
                            <p>Our team selected a dataset from Kaggle that explores shows with LGBTQIA+ representation and separately delves into queer characters appearing in these series. For our geospatial component, we created our own dataset employing a CNN timeline of landmark LGBTQIA+ rights events in the United States.</p>
                        </div>
                        <img src={owl} alt="Luz Noceda, the main character from owl house standing with their left hand behind their back and smiling" id="owl"></img>
                    </div>
                </div>
                <div id="questionblock">
                    <img src={questions} alt="A light purple box with a heading that says 'Research Questions' followed by a list of 3 questions. 1. How has queer representation transformed in U.S. animated shows between 1989 and 2001. 2. Do certain gender identities and sexual orientations have more representation than others? 3. Do some genres have more queer representation than others?" id="questions"/>
                </div>
                <div id="accessibilityinfo">
                    <div id="accesscontent">
                        <img src={lady} alt="Luz Noceda, the main character from owl city standing with their left hand behind their back and smiling" id="lady"></img>
                        <div id="accessdescription">
                            <h1 id="accessheading">accessible design</h1>
                            <h3>&#128187; screen reader friendly</h3>
                            <p>Prioritizing a simple interface design, we have taken away drop down menus. That way, we can  create a great reading experience for audiences employing an application that reads what is on screen to them.</p>
                            <h3>&#128264; no audio-based media</h3>
                            <p>To have our information accessible to audiences all across the spectrum of hearing, we have consciously excluded audio on our website.</p>
                        </div>
                    </div>
                </div>
            </div>
        </Template>
    )
}

export default Landing;