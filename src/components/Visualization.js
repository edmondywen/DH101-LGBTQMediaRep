import React from 'react';
import Tableau from 'tableau-react';

function Visualization(props){
    return(
        <Tableau url={props.url} options={{height: props.height, width: props.width}}></Tableau>
    )
}

export default Visualization;