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
                <br/><br/><br/><br/>
                <h1>Overview of a Digital Humanities Project</h1>
                <div id="levels">
                    <div id="level-sources">
                        <header>sources</header>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Metus dictum at tempor commodo ullamcorper a lacus vestibulum. Nullam eget felis eget nunc lobortis. Metus vulputate eu scelerisque felis imperdiet proin fermentum leo. Proin sed libero enim sed faucibus turpis in. Consequat interdum varius sit amet mattis vulputate enim. Neque sodales ut etiam sit amet nisl purus. Accumsan lacus vel facilisis volutpat est velit. Ac orci phasellus egestas tellus rutrum. A condimentum vitae sapien pellentesque habitant.</p>
                        <p>Eleifend mi in nulla posuere sollicitudin aliquam. Lectus mauris ultrices eros in cursus turpis massa tincidunt. Nibh venenatis cras sed felis eget velit aliquet. Sed pulvinar proin gravida hendrerit lectus a. Amet nisl purus in mollis nunc sed id semper risus. Sit amet aliquam id diam. Non odio euismod lacinia at quis risus. Viverra vitae congue eu consequat ac felis donec et. Pellentesque nec nam aliquam sem et tortor consequat id. Praesent semper feugiat nibh sed pulvinar. Interdum consectetur libero id faucibus nisl tincidunt eget. Ut etiam sit amet nisl purus in mollis. Ac tincidunt vitae semper quis lectus nulla at volutpat.</p>
                    </div>
                    <div id="level-sources">
                        <header>processing</header>
                        <p>Volutpat ac tincidunt vitae semper quis lectus nulla at. Morbi tristique senectus et netus et malesuada fames ac turpis. Aliquam vestibulum morbi blandit cursus risus at. Lacus laoreet non curabitur gravida arcu. Non tellus orci ac auctor augue mauris augue neque. Dictum non consectetur a erat nam. Nisi quis eleifend quam adipiscing. Orci porta non pulvinar neque laoreet suspendisse. Et malesuada fames ac turpis egestas maecenas pharetra. Vestibulum morbi blandit cursus risus at ultrices mi tempus. Ultrices vitae auctor eu augue. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Egestas fringilla phasellus faucibus scelerisque eleifend donec. Amet massa vitae tortor condimentum lacinia. Orci sagittis eu volutpat odio facilisis mauris sit amet. Aliquet sagittis id consectetur purus ut. Leo integer malesuada nunc vel risus. Magna sit amet purus gravida quis blandit. Vulputate ut pharetra sit amet.</p>
                        <p>Integer quis auctor elit sed vulputate mi. Purus in mollis nunc sed id semper risus in hendrerit. Tempor id eu nisl nunc mi ipsum faucibus vitae. Luctus accumsan tortor posuere ac ut consequat semper. Quam viverra orci sagittis eu volutpat odio. Consectetur lorem donec massa sapien faucibus et molestie ac. Ultricies mi quis hendrerit dolor magna eget est lorem. Nunc sed blandit libero volutpat sed. Nisl condimentum id venenatis a. Fames ac turpis egestas integer eget aliquet. Eget dolor morbi non arcu risus quis varius quam quisque. Nibh ipsum consequat nisl vel pretium. Non pulvinar neque laoreet suspendisse interdum consectetur. Interdum velit laoreet id donec. Quis commodo odio aenean sed adipiscing diam donec adipiscing tristique. Habitasse platea dictumst quisque sagittis purus sit amet volutpat consequat. Cursus mattis molestie a iaculis at.</p>
                    </div>
                    <div id="level-sources">
                        <header>presentation</header>
                        <p>Volutpat consequat mauris nunc congue nisi vitae suscipit. Neque vitae tempus quam pellentesque nec nam. Eu mi bibendum neque egestas congue quisque egestas diam in. Maecenas pharetra convallis posuere morbi leo urna molestie at. Purus sit amet luctus venenatis. Elit ullamcorper dignissim cras tincidunt lobortis feugiat vivamus at augue. Faucibus ornare suspendisse sed nisi lacus sed viverra tellus in. Morbi tincidunt ornare massa eget egestas purus viverra accumsan. Adipiscing at in tellus integer feugiat scelerisque. Condimentum mattis pellentesque id nibh tortor id aliquet lectus.</p>
                        <p>Sapien pellentesque habitant morbi tristique senectus. Sociis natoque penatibus et magnis dis. Mi quis hendrerit dolor magna eget est lorem ipsum. Aliquet sagittis id consectetur purus ut faucibus pulvinar elementum. Sociis natoque penatibus et magnis dis parturient montes. Scelerisque eleifend donec pretium vulputate sapien nec sagittis. Nunc faucibus a pellentesque sit. Commodo sed egestas egestas fringilla. Sagittis nisl rhoncus mattis rhoncus urna neque viverra justo nec. Tortor consequat id porta nibh venenatis. A condimentum vitae sapien pellentesque habitant morbi tristique. Suscipit adipiscing bibendum est ultricies integer quis auctor. Netus et malesuada fames ac turpis egestas sed tempus urna. Morbi tristique senectus et netus et malesuada fames. Ac odio tempor orci dapibus ultrices in iaculis nunc.</p>
                    </div>
                </div>
                <h1>About the Authors</h1>
                <div id="biographies">
                    <Bio image={ariana} name="Ariana Castro" role="Worked on the project" about="" char=""/>
                    <Bio image={sara} name="Sara Hisamune" role="Worked on the project" about="" char=""/> 
                    <div class="flexbreak-2"/>
                    <Bio image={satsuki} name="Satsuki Liu" role="Web Development" about="Satsuki is a fourth-year computer science major with an interest in full-stack software development and Big Data. She was responsible for helping build the website using React and CSS." char={<span>Their favorite character from the dataset is <b>Stat</b> from <b>Q-Force</b>.</span>}/>
                    <div class="flexbreak-3"/>
                    <Bio image={an} name="An Nguyen" role="Worked on the project" about="" char=""/> 
                    <div class="flexbreak-2"/>
                    <Bio image={edmond} name="Edmond Wen" role="Worked on the project" about="" char=""/> 
                    <Bio image={maleeha} name="Maleeha Zaman" role="Worked on the project" about="" char=""/> 
                </div>
            </div>
        </Template>
    )
}

export default About;