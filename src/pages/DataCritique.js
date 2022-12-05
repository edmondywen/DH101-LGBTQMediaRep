import React from 'react';
import Template from './Template';
import char from '../assets/critique/datacritiqueimages.svg';

function DataCritique(){
    return(
        <Template>
            <div className="critique">
                <div id="critheading">
                    <p>about the data</p>
                </div>
                <div id="database">
                    <h1>the database: kaggle</h1>
                    <div class="copy">
                        <p>Kaggle is a machine learning and data science platform with a global community of over 11.6 million. Owned by Google, it allows users to improve their knowledge of data science with courses, publish and access datasets, collaborate with other users, and gain professional recognition and sometimes cash prizes in competitions—all for free.</p>
                        <p>Highly accessible, the platform enables users of diverse backgrounds and levels of skill to investigate trends of their interest, especially those which lack widespread research. The credibility of a dataset can be determined by reviewing the notebooks shared as well as its upvotes.</p>
                    </div>
                </div>
                <div id="content">
                    <h1>data critique</h1>
                    <h2>how was the dataset produced?</h2>
                    <div class="copy">
                        <p>We selected a dataset from Kaggle entitled LGBTQ representation in animated shows in the us for our project, covering queer representation in American cartoons between 1989 and 2021.</p>
                        <p>User A_N_WILSON created this dataset for their capstone project in the Google Data Analytics Program at an unnamed institution. A_N_WILSON sought to expand on the data from Insider’s 259 LGBTQ characters in cartoons that bust the myth that kids can't handle inclusion. As the Insider database focused solely on children’s animated television, this Kaggle user strove to include shows of all target audiences.</p>
                        <p>Members of the Insider team compiled their data from news clips, social media, GLAAD annual reports, and other character directories. The sexual orientation, gender identity, race, and ability of each character were confirmed via the show, the studio, social media posts by the creative team, or directly with creators in interviews.</p>
                        <p>In cases where Insider could not obtain creator or studio confirmation — or when creators did not share these details — entries were labeled unknown. If a creative team did not offer clarification about the identity of a character during production, that character was labeled undetermined.</p>
                        <p>A_N_WILSON then modified this collection of data to exclude studio information. They supplemented data from the Insider database with information on IMDb and Wikipedia concerning the number of seasons, number of episodes, and start and end dates.</p>
                        <p>When they could not find an IMDB or Wikipedia page for a particular show, they removed it from the dataset. Moreover, they omitted characters that appeared in spin-off shows and only included them in the series of their first appearance</p>
                    </div>
                    <img src={char} alt="three characters?" id="three"></img>
                    <h2>what's included?</h2>
                    <div class="copy">
                        <p>Not only do we have a record of animated queer characters for various target audiences, but also a log of their historical presence in America. The dataset contains basic information on the name, role, appearance, and design of LGBTQIA+ characters that appeared in American animated shows between 1989 and 2021. Furthermore, it offers deeper insight into the popularity, duration, and reception of the shows they aired in.</p>
                        <p>A_N_WILSON organized data across two spreadsheets. One spreadsheet contains entries for each LGBTQIA+ character and records eight variables: name, race, gender, sexual orientation, role (i.e., whether they are a protagonist, guest, or recurring character), representation (explicit or implicit), show title, and confirmation date. This first set of data contains 354 entries.</p>
                        <p>The second spreadsheet contains 119 entries for each relevant show while recording 11 variables: series title, TV rating, IMDB rating, IMDB total votes, number of seasons, total episodes, start date, end date, duration, network, and genre.</p>
                        <p>An analysis of this dataset will allow us to investigate how LGBTQIA+ representation has changed over the past decades. We can observe whether LGBTQIA+ representation has increased over this period ー based on whether shows have come to feature more LGBTQIA+ characters in increasingly central roles. We can also explore how LGBTQIA+ representation has diversified over time ー in terms of the gender, orientation, and race of the characters.</p>
                    </div>
                    <h2>what's excluded?</h2>
                    <div class="copy">
                        <p>There still exist limitations to our dataset. To begin with, it omits specific information about the studios that produced these shows. Furthermore, we cannot examine the percentages of each state watching shows that contain queer representation across time.</p>

                        <p>The demographic makeup and distribution of the actual audience are also not transparent (e.g., age range, race, ethnicity), so we cannot say much about the trends relating to how LGBTQIA+ characters are accessed. Although representation expands, it is hard to tell if access is improving equally as much.</p>

                        <p>As for the characters, it is impossible to interpret any trends in queer representation across different races in this dataset due to limited race categories on the original Insider database (i.e., White, POC, or Undetermined). Moreover, we cannot account for the representation of those with disabilities.</p>
                    </div>
                </div>
            </div>
        </Template>
    )
}

export default DataCritique;