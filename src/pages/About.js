import React from 'react';
import { Link } from 'react-router-dom';
//import Tableau from "tableau-react";
import Template from './Template';
import Bio from '../components/Bio';
//import Visualization from '../components/Visualization';
import ariana from '../assets/ariana.png';
import sara from '../assets/sara.png';
import satsuki from '../assets/satsuki.png';
import an from '../assets/an.png';
import edmond from '../assets/edmond.png';
import maleeha from '../assets/maleeha.png';

function About(){
    return(
        <Template>
            <div id="aboutpage">
                <div id="aboutheading">
                    <p>about</p>
                </div>
                <div id="levelwrapper">
                    <h1>the three levels of a digital humanities project</h1>
                    <div id="levels">
                        <div id="level-sourcing">
                            <header>sourcing</header>
                            <p>To investigate LGBTQ+ representation in media, we worked with an extensive dataset from <b>Kaggle</b>, an online community platform where users and data scientists can find and publish data. The Kaggle dataset creator compiled information on LGBTQ+ characters that appeared in American animated shows between 1989 and 2021. They collected the information from a database created by <b>Insider</b> entitled <a href="https://www.insider.com/lgbtq-cartoon-characters-kids-database-2021-06?page=explore-database">259 LGBTQ characters in cartoons that bust the myth that kids can't handle inclusion</a>, supplemented by information from IMDb and Wikipedia. Members of the Insider team compiled their data from news clips, social media, GLAAD annual reports, and other character directories. The sexual orientation and gender identity of each character were confirmed via the show, the studio, social media posts by the creative team, or directly with creators in interviews.</p>
                            <p>Before interpreting our data, we considered potential silences that was present in the data (eg. lack of information on race). This can be viewed in our <Link to="/critique#top">Data Critique</Link> where we discuss this in more detail. Inspired by Trouillot’s Silencing the Past, which provides us with a line of logic when dealing with potential silences in our data, we centered our research on specific gender and sexual orientation groups to empower marginalized LGBTQ+ communities and examine gaps in queer representation as media continues to include more LGBTQ+ characters. While brainstorming for this project, we acknowledged that many existing datasets about media are heteronormative, and we sought to use data to encourage more literature and visibility in the subject of LGBTQ+ media.</p>
                            <p>To investigate the historical context behind LGBTQ+ representation, we developed our own geospatial data using an article from <b>CNN</b> entitled <a href="https://www.cnn.com/2015/06/19/us/lgbt-rights-milestones-fast-facts">LGBTQ Rights Milestones Fast Facts</a> and created an interactive historical map. This article is valuable as it outlines the history of LGBTQ+ rights in the United States that could correlate with the release and reception of the animated shows we are examining. The article contains dates, locations, and descriptions of significant events in LGBTQ+ history between 1924 and 2022.</p>
                        </div>
                        <div id="level-processing">
                            <header>processing</header>
                            <p>The Kaggle dataset we used was relatively clean and easy to understand, with no typos and few outlier and null values. Minimal cleaning was done using <b>Microsoft Excel</b>. We used <b>Tableau Public</b> to create our data visualizations. Tableau Public is a great and accessible tool for data visualization in which you can efficiently build informative visualizations with built-in analytics tools. We were able to effectively create and color-code our bar charts, line charts, and area charts as well as add tooltips that could specify any extra information we would like to include.</p>
                            <p>We compiled our geospatial data for our historical map of LGBTQ+ rights by manually adding the year, event name, and event description from the CNN article and used Google to search for the city and state each event occurred in. Then we geocoded the data in <b>Google Sheets</b> using a Google extension called <b>Geocode by Awesome Table</b>. After geocoding our data, we used the mapping visualization software <b>Flourish</b>. This tool was easy to navigate, as well as share and embed on the website. We were able to animate the map using Flourish so that the significant events would appear over time, and the user is able to pause the animation and hover over the point to read the event description.</p>
                            <p>We also used <b>Timeline.js</b> to show when the shows in our dataset aired to describe the history and progression of animated shows over time in the United States. This tool was useful in incorporating visuals into an interactive timeline, making it more engaging and easier for the viewer to see the animated shows we researched in chronological order.</p>
                        </div>
                        <div id="level-presentation">
                            <header>presentation</header>
                            <p>When designing our website, we first prototyped the website layout on <b>Figma</b> to ensure our website is both visually appealing and easy to navigate. We incorporated a simple color palette of white with a pop of color. We also used multicolor backgrounds to represent LGBTQ+ pride. Furthermore, we wanted to incorporate the childlike wonder and imaginative aspects of animation into our design, adding small doodles around the site and pictures of animated characters. Furthermore, we wanted to keep navigation simple and intuitive, limiting ourselves to the five pages on the site.</p>
                            <p>We elected to forgo the prescribed method of using WordPress and HumSpace and instead developed and hosted our own page from scratch using <b>GitHub</b> for version control and <b>Netlify</b> for hosting the actual website. We did this because we were experiencing technical issues with the credential system, and in light of the ongoing TA strike, rather than troubleshooting such, we realized we had two group members who had proper experience in either development environments and decided that this alternative route would be more effective. We used <b>React</b>, a JSX library, to develop the HTML components of the website, while all styling was done directly in <b>CSS</b>. The developers used the prototypes designed on Figma in order to create the final product.</p>                    </div>
                    </div>
                </div>
                <div id="about-auth">
                    <h1>about the authors</h1>
                    <div id="biographies">
                        <Bio image={ariana} name="Ariana Castro" role="Web Designer" about="Ariana is a second-year English major and Digitial Humanities minor. As web designer, she established guidelines for the project's fonts and color palette, handpicked images for each page, and illustrated graphics to enhance the site's overall aesthetic. She designed wireframes to organize all these components. Moreover, she assisted in the creation of data visualizations as well as written content." char={<span>Her queer icon is <b>Alucard</b> from <b>Castlevania</b>.</span>}/>
                        <Bio image={sara} name="Sara Hisamune" role="Editor & Data Specialist" about="Sara is a fourth-year Economics major. As one of the project’s editors, she assisted in writing the project’s narrative and introductory paragraphs ー as well as editing these sections for grammatical and contextual flow. As one of the project’s data visualization specialists, she also contributed two of her data visualizations to the project and helped embed other members’ visualizations within the wider narrative." char={<span>Her favorite cartoon character is <b>Caitlyn</b> from <b>Arcane</b>!</span>}/> 
                        <div class="flexbreak-2"/>
                        <Bio image={satsuki} name="Satsuki Liu" role="Developer" about="Satsuki is a fourth-year Computer Science major with an interest in full-stack software development and Big Data. As one of two developers, she was responsible for helping build the website using React and CSS. Additionally, she was responsible for creating the layout of some of the final website's subpages, as well as designing one of the graphs used in the gender component of the narrative." char={<span>Their favorite character from the dataset is <b>Stat</b> from <b>Q-Force</b>.</span>}/>
                        <div class="flexbreak-3"/>
                        <Bio image={an} name="An Nguyen" role="Editor" about="An is a fourth-year Biochemistry major. As one of the editors, she contributes to editing the narrative to ensure the consistency of the format as well as spelling and grammar errors. As one of the data visualization specialists, she overlooks the format of data visualization to make sure they are universal across the website. She also contributes one data visualization to the project." char={<span>Her favorite cartoon character is <b>Harley Quinn</b> from <b>Harley Quinn</b>.</span>}/> 
                        <div class="flexbreak-2"/>
                        <Bio image={edmond} name="Edmond Wen" role="Developer" about="Edmond is a third year Computer Science major. As one of two developers, he created the website in React and setup the live deployment on Netlify. He also helped write initial drafts for the narrative, data critique, and designed some of the data visualizations." char={<span>His favorite character from the dataset is <b>Princess Bubblegum</b> from <b>Adventure Time</b>.</span>}/> 
                        <Bio image={maleeha} name="Maleeha Zaman" role="Project Manager" about="Maleeha is a second-year Cognitive Science major and Digital Humanities minor. As project manager, she oversaw the progress of the project, scheduling meetings, divided tasks, and communicated between members. She assisted in formatting the website, and created the timeline and map used in the narrative. Additionally, she assisted in editing and creating written and visual content, as well as developing a narrative across the group’s data visualizations. She also helped write the sourcing, processing, and presentation sections in the About page." char={<span>Her favorite cartoon character <b>Marceline</b> from <b>Adventure Time</b>!</span>}/> 
                    </div>
                </div>
                <div id="acknowledgements">
                    <h1>acknowledgements</h1>
                    <div id="thisisstupid">
                        <p>We want to thank Dr. Ashley Sanders and our T.A. Grace Skalinder for sharing their passion about Digital Humanities with us by introducing us to all the tools we need and providing workshops through this wonderful course. Their feedback, patience, and endless support helped us in expanding our research skills and producing the final product.</p>
                    </div>
                </div>
            </div>
        </Template>
    )
}

export default About;