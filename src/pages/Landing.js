import React from 'react';
import Tableau from "tableau-react";

function Landing(){
    return(
        <div>
            <Tableau
            url = 'https://public.tableau.com/shared/3K7KQN59J?:display_count=n&:origin=viz_share_link'
            />
        </div>
    )
}

export default Landing;