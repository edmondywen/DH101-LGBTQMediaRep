import React from 'react';
import Tableau from 'tableau-react';

function Visualization(props){
    return(
        <div class="Visualization">
            <Tableau url={props.url}></Tableau>
            <p class="description"><span style={{'font-weight': 'bold'}}>Figure {props.num}:</span> {props.text}</p>
        </div>
    )
}

export default Visualization;