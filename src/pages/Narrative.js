import React from 'react';
import { useEffect } from 'react';
//import Tableau from "tableau-react";
import Template from './Template';
import Visualization from '../components/Visualization';

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
                <Visualization url="https://public.tableau.com/views/fig_1_16702219046840/Fig_1?:language=en-US&:display_count=n&:origin=viz_share_link" height={500} width={500}></Visualization>
                {/* 
                fig2: https://public.tableau.com/views/fig_2a/Fig_2a?:language=en-US&:display_count=n&:origin=viz_share_link
                fig2b: https://public.tableau.com/views/fig_2b/Fig_2b?:language=en-US&:display_count=n&:origin=viz_share_link
                fig3: https://public.tableau.com/views/fig_3_16702222010530/Fig_3?:language=en-US&:display_count=n&:origin=viz_share_link 
                fig4: https://public.tableau.com/views/fig_4/Fig_4?:language=en-US&:display_count=n&:origin=viz_share_link
                fig5: https://public.tableau.com/views/fig_5/Fig_5?:language=en-US&:display_count=n&:origin=viz_share_link
                fig6: https://public.tableau.com/views/fig_6/Fig_6?:language=en-US&:display_count=n&:origin=viz_share_link
                fig7: https://public.tableau.com/views/fig_7/Fig_7?:language=en-US&:display_count=n&:origin=viz_share_link
                */}
            </div>
        </Template>
    )
}

export default Narrative;