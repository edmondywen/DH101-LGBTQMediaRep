import React from 'react';
import { Link } from 'react-router-dom';
import Tableau from "tableau-react";
import Template from './Template';
import Visualization from '../components/Visualization';

function Analysis(){
    return(
        <Template>
            <div>
                <p>Analysis Here</p>
                <Visualization
                url = 'https://public.tableau.com/shared/3K7KQN59J?:display_count=n&:origin=viz_share_link'
                height={1000}
                width={1000}
                />
            </div>
        </Template>
    )
}

export default Analysis;