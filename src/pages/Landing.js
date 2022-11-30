import React from 'react';
import Tableau from "tableau-react";
import Template from './Template';

function Landing(){
    return(
        <Template>
            <div className="landing">
                <Tableau
                url = 'https://public.tableau.com/shared/3K7KQN59J?:display_count=n&:origin=viz_share_link'
                />
            </div>
        </Template>
    )
}

export default Landing;