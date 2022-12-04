import React from 'react';
import Template from './Template';
import questions from '../assets/research-questions.svg';
import bmo from '../assets/dancingbmo1.svg';
import logo from '../assets/animatedicons.svg';
import owl from '../assets/owlcitylanding.svg';

function Landing(){
    return(
        <Template>
            <div className="landing">
                <div id="heading">
                    <div id="headingtext">
                        <img src={logo}></img>
                        <p>Crafted by UCLA Digital Humanities students, this narrative analyzes the progression of queer portrayal in American animated media since the 1990s using an extensive Kaggle dataset.</p>
                    </div>
                    <img src={bmo} alt="An image of BMO, a character from adventure time, dancing" id="bmo"></img>
                </div>
                <div id="about" align="left">
                    <h1 id="aboutheading">about the project</h1>
                    <div id="aboutcontent">
                        <div>
                            <p><span style={{color: '730BF6', 'font-weight': 'bold'}}>animated icons</span> is a group project for an introductory Digital Humanities course taught at UCLA by Dr. Ashley Sanders Garcia in the fall quarter of 2022. In addition to Dr. Sanders, our team owes much of our work to the guidance of Grace Skalinder.</p>
                            <p>Students are tasked to create a web-based mini-site that investigates an openly accessible dataset from multiple angles via digital methodologies (e.g., data visualization through charts and graphs, geospatial visualization, statistical analysis, etc.) and a Humanities lens.</p>
                            <p>Our team selected a dataset from Kaggle that explores shows with LGBTQIA+ representation and separately delves into queer characters appearing in these series. For our geospatial component, we created our own dataset employing a CNN timeline of landmark LGBTQIA+ rights events in the United States.</p>
                        </div>
                        {/* Image of that Owl House character can go here, if you want help styling it later just let me know */}
                        <img src={owl} id="owl"></img>
                    </div>
                </div>
                <div id="questionblock">
                    <img src={questions} alt="research questions" id="questions"/>
                </div>
            </div>
        </Template>
    )
}

export default Landing;