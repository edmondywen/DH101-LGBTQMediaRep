import React from 'react';
import Template from './Template';
import Visualization from '../components/Visualization';

function Analysis(){
    return(
        <Template>
            <div>
                <p>Analysis Here</p>
                <Visualization
                url = 'https://public.tableau.com/views/FINALDATAVIZ_16702190523950/Fig_7?:language=en-US&:display_count=n&:origin=viz_share_link'
                height={1000}
                width={1000}
                />
            </div>
        </Template>
    )
}

export default Analysis;