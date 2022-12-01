import React from 'react';
import Template from './Template';

function Landing(){
    return(
        <Template>
            <div className="landing">
                <div id="background"></div>
                <div id="welcome">
                    <h1 id="title"><span style={{"font-face":"Brush Script MT, cursive"}}>animated</span> icons</h1>
                </div>
                
            </div>
        </Template>
    )
}

export default Landing;