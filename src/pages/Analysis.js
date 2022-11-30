import React from 'react';
import { Link } from 'react-router-dom';
import Tableau from "tableau-react";
import Template from './Template';

function Analysis(){
    return(
        <Template>
            <div>
                <p>Analysis Here</p>
                <Tableau
                url = 'https://public.tableau.com/shared/3K7KQN59J?:display_count=n&:origin=viz_share_link'
                />
            </div>
        </Template>
    )
}

export default Analysis;
