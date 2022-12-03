import React from 'react';
import Template from './Template';
import questions from '../assets/research-questions.svg';
import bmo from '../assets/dancingbmo1.svg';

function Landing(){
    return(
        <Template>
            <div className="landing">
                <div id="heading">
                    <p>Crafted by UCLA Digital Humanities students, this narrative analyzes the progression of queer portrayals since the 1990s  using an extensive Kaggle dataset as research surrounding this topic is still limited.</p>
                    <img src={bmo} alt="An image of BMO, a character from adventure time, dancing" id="bmo"></img>
                </div>
                <img src={questions} alt="research questions" id="questions"/>
            </div>
        </Template>
    )
}

export default Landing;