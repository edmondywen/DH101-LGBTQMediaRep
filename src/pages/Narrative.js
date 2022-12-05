import React from 'react';
import { useEffect } from 'react';
//import Tableau from "tableau-react";
import Template from './Template';
//import Visualization from '../components/Visualization';
import {Helmet} from "react-helmet";

function Narrative(){
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://public.flourish.studio/resources/embed.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
          document.body.removeChild(script);
        }
    });

    return(
        <Template>
            <div className="narrative">
                <p>Narrative and other styling stuff goes here</p>
                <div class="flourish-embed flourish-map" data-src="visualisation/11722873"></div>
                <iframe src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1C6F4-AiJkPo-OH5nKde0w3ZlsxfZMRHuiGQw6OtSr7w&font=Default&lang=en&initial_zoom=2&height=650' width='100%' height='650' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0'></iframe> 
                <iframe src='https://flo.uri.sh/visualisation/11722873/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style={{width:'100%', height:'calc(600px + 10vh)'}}sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>
            </div>
        </Template>
    )
}

export default Narrative;