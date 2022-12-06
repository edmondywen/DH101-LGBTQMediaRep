import React from 'react';
//import Tableau from "tableau-react";
import Template from './Template';
import Visualization from '../components/Visualization';
import challengeleft from '../assets/narrative/challengeleft.svg';
import table from '../assets/narrative/table.svg';
import tall from '../assets/narrative/tall.png';

function Narrative(){
    return(
        <Template>
            <div className="narrative">
                <div id="narrheading">
                    <p>narrative</p>
                </div>
                <h1>Introduction</h1>
                <div id="intro2">
                    <div class="copy">
                        <p>Today, queer characters feature in numerous mainstream animated shows, ranging from adult black comedies like Family Guy and Bojack Horseman to teen superhero cartoons like Steven Universe and Young Justice.</p>
                        <p>2021 saw the confirmation of 46 queer characters across US animated shows — a dramatic increase compared to just two such characters in 1990. Over the past thirty years, particularly within the past five years, queer representation has expanded considerably within the sphere of animated media.</p>
                        <p>There is an ongoing debate as to whether queer representation in television is truly beneficial to normalizing the existence of queer identities. Existing literature on queer media argues that queer media positively impacts both heteronormative and queer viewers. Joyrich maintains that queer representation in TV shows can function to normalize the existence of queer individuals for heteronormative viewers (Joyrich 2014).</p>
                        <p>However, Hennessy argues that the benefits of normalization come at the expense of eroding the very meaning of queerness. The increasing presence of queer representation in media has incentivized corporations to commodify queer identities for the sake of improving their bottom line (Hennessy 1994). Neoliberalism does so by creating an image of an acceptable queer that is unique enough to be marketed towards but not unique enough to be distasteful to a general audience.</p>

                        <p>Much of this representation, however, tend to occur in the comedy genre and limits itself to primarily cisgender gay identities. Together, these observations indicate that the US animation industry has taken significant steps towards increasing queer visibility ー but that this visibility falls short of representing the full spectrum of queer identities and avoiding using harmful queer stereotypes as a humor device.</p>

                        <p>The dataset we are using, entitled LGBTQ representation in animated shows in the US, was publicly released on Kaggle and created using an Insider database on queer cartoon characters. Containing two spreadsheets that span 19 variables and 473 data entries, the dataset includes detailed information on all queer characters that have appeared in US animated shows between 1989 and 2021.</p>

                        <p>With this dataset, we intend to explore how queer representation in animation has changed over time regarding quantity and general reception. We will also investigate whether specific genres and LGBTQIA+ identities occupy more significant proportions of this representation than others. We have summarized our main focuses for the dataset in the  research questions below:</p>
                        <ol>
                            <li>How has queer representation in U.S. animated shows ー and the general reception of these shows ー changed between 1989 and 2021?</li>
                            <li>Among these shows, have particular gender identities and sexual orientations had more representation than others?</li>
                            <li>Among these shows, have certain genres had more queer representation than others?</li>
                        </ol>
                    </div>
                </div>
                <h1>Our Findings</h1>
                <div id="ourfindings">
                    <div class="copy">
                        <h2>Evolution of queer representation in animation</h2>
                        <h3>Increasing explicit queer representation over time</h3>
                        <Visualization url="https://public.tableau.com/views/fig_1_16702219046840/Fig_1?:language=en-US&:display_count=n&:origin=viz_share_link" num="1" text="Confirmed Queer characters in U.S. Animated Shows (1989-2021)"></Visualization>
                        <p>In the visualization above, the x-axis displays the year while the y-axis shows the number of confirmed queer characters featured in US animated shows that year.</p>

                        <p>As the line chart depicts, there have been dramatic increases in queer representation in US animated shows between 1989 and 2021. Between 1991, which saw the confirmation of 2 queer characters, and 2016, which saw the confirmation of 12, we see a trend of steadily increasing queer representation. We see these numbers skyrocket in the years following 2016, taking on the values of 53, 32, and 46 characters in 2019, 2020, and 2021 respectively.</p>

                        <p>Overall, the trend is that US animated shows have come to feature more and more queer characters over time and particularly over the past couple of years. <span style={{'font-weight': 'bold'}}>From just two animated characters confirmed to be queer in 1991 to an impressive 46 confirmed in 2021, queer representation has undoubtedly increased with every coming decade.</span></p>

                        <p>Not only has queer representation as a whole been increasing, but specifically explicit queer representation has been on the rise in recent years. Explicit representation refers to characters identified as queer, either through dialogue confirming their gender or orientation or overt illustrations, including on-screen kisses and marriages. Implicit representation, on the other hand, includes characters that have been suggested as queer through less overt illustrations like blushing or idioms about the characters’ orientation.</p>

                        <Visualization url="https://public.tableau.com/views/fig_2a/Fig_2a?:language=en-US&:display_count=n&:origin=viz_share_link" num="2a" text="Breakdown of the percentage of implicit and explicit characters (1989-2021)"></Visualization>

                        <Visualization url="https://public.tableau.com/views/fig_2b/Fig_2b?:language=en-US&:display_count=n&:origin=viz_share_link" num="2b" text="Confirmed characters with explicit representation over time (1989-2021)"></Visualization>

                        <p>The pie chart above shows the breakdown of queer characters featured in US animated shows between 1989 and 2021 into either explicit or implicit representation. The adjacent line chart, which displays the year on the x-axis and the number of explicitly confirmed queer characters per year on the y-axis, shows how explicit queer representation has increased over the years.</p>

                        <p>As seen on the pie chart, queer representation over the past three decades has been primarily explicit, with a 74.49% majority of characters having been explicitly confirmed as queer. <span style={{'font-weight': 'bold'}}> Furthermore, as the line chart illustrates, such explicit representation has been appearing at faster and faster rates, particularly in the past couple of years.</span> The recent surges in queer representation, specifically explicit queer representation, signify important strides taken by the U.S. animation industry to expand queer visibility.</p>

                        <h3>Interactive timeline of US animated shows with queer representation</h3>
                        <iframe src='https://cdn.knightlab.com/libs/timeline3/latest/embed/index.html?source=1C6F4-AiJkPo-OH5nKde0w3ZlsxfZMRHuiGQw6OtSr7w&font=Default&lang=en&initial_zoom=2&height=650' width='100%' height='650' webkitallowfullscreen mozallowfullscreen allowfullscreen frameborder='0' title="timeline"></iframe> 

                        <p>The interactive timeline above displays the runtimes of each animated show in our dataset. As the timeline depicts, these runtimes are primarily concentrated in the past decade, indicating how queer representation has increased among shows in recent years.</p>

                        <h2>Gender & sexual orientation breakdown</h2>
                        <h3>Gay and lesbian sexualities dominate queer representation </h3>

                        <Visualization url="https://public.tableau.com/views/fig_3_16702222010530/Fig_3?:language=en-US&:display_count=n&:origin=viz_share_link" num="3" text="Character Confirmation of Sexual Orientation Over Time (1989-2021)"></Visualization>
                        <p>The line graph above displays the sexual orientation breakdown of queer characters by year of confirmation of a character’s sexual orientation, whether in the animated cartoon or by the studio, from 1989 to 2021. The year of confirmation is displayed on the x-axis, and the percentage of total characters per year is displayed on the y-axis. Trend lines are included to depict the overall direction of change in representations of queer sexualities over time.</p>

                        <p>From 1989 to 2021, lesbian and gay characters predominantly make up LGBTQIA+ cartoon representations by a large margin, followed closely by bisexuality. This continues to trend upward past the 2010s. There is a deficit in asexual and polyamorous representations such that asexuality and polyamory had only been represented at most once a year. Overall, gay characters consistently hold the highest percentage of representations in cartoons compared to all other groups.</p>

                        <p>In the 1990s, the number of gays and lesbian representations outnumbered representations of other sexual orientations (bisexual, pansexual, queer, asexual) on animated shows. A possible explanation for the homosexual visibility during this period is that such representation was used as a humor device to heteronormative audiences, with the agenda to depict homosexuals as abnormal (Green 2013). As we approach the early 2000s, we can see an emergence of representations of sexualities other than homosexuality. However, representations of queer sexualities remained rare in cartoons and were often viewed as undesirable and “too adult” for the market of children’s media (Pitman 2022).</p>

                        <p>Only entering the 2010s do we see queer representation expand to encompass more than just lesbian and gay orientations, with a significant increase in bisexual visibility and the appearance of polyamorous and pansexual orientations. This correlates to the increased acceptance of queer sexualities in the 2010s when marriage was legalized in the United States in Obergefell v. Hodges in 2015, along with the rise of more queer public figures, such as openly gay Emmy-award winning actor Billy Porter and Pete Buttigieg who became the first openly gay Cabinet member confirmed by the Senate (CNN Editorial Research 2022).</p>

                        <h3>Cisgender identities dominate queer representation</h3>

                        <p><span style={{'font-weight': 'bold'}}>In addition to gay sexualities, queer representation overwhelmingly features cisgender identities.</span> As can be seen on the graph below, there are nearly six times more animated cisgender characters than gender-nonconforming characters on television.</p>

                        <p>In addition to gay sexualities, queer representation overwhelmingly features cisgender identities. As can be seen on the graph below, there are nearly six times more animated cisgender characters than gender-nonconforming characters on television.</p>

                        <Visualization url="https://public.tableau.com/views/fig_4/Fig_4?:language=en-US&:display_count=n&:origin=viz_share_link" num="4" text="Percentage of characters broken down by gender over time (1989-2021)"></Visualization>

                        <p>The area chart illustrates the frequency of gender groups being represented each year. The x-axis indicates the year that the gender of the character was confirmed, and the y-axis represents the proportion of gender groups that were represented during that year.</p>

                        <p><span style={{'font-weight': 'bold'}}>Cisgender identities receive significantly more representation than non-cisgendered identities</span></p>

                        <p>According to the area chart, between 1991 and 2008, cis males dominated representation by 50% or more. Specifically, in the years 1991, 1995, 1996, 2002, and 2003, cis males made up 100% of gender representations that occurred in those years respectively. Next to cis males, cis women also dominate LGBTQIA+ representations. Before 2008, cis men had more representation than cis women, but after 2008, cis women slowly start to dominate representation as well almost at an equal level with cis men. Furthermore, in the early 2010s, we found a small emergence of other gender groups being represented, most notably trans women and trans men. Nonbinary, intersex, and genderfluid don’t emerge until 2013.</p>

                        <p>One plausible explanation behind the domination of cisgender representations is how binary perceptions of gender have been widely accepted and enforced in Western society. In the centuries preceding the twenty-first century, straying from gender norms has been recognized as a taboo under dominant European lenses and even met with violence. Forms of media have reflected this oppressive perception, limiting portrayals of identities that fall outside this cookie-cutter gender model (Green et al. 2020).</p>

                        <p>Only recently, specifically in April of this year, did federal officials make the “X” gender marker available in passports for citizens of the United States. Although few, there are more and more trans, nonbinary, agender, and intersex animated characters, which mirrors a growing acceptance for gender-nonconforming individuals today (Green et al. 2020).</p>

                        <Visualization url="https://public.tableau.com/views/fig_5/Fig_5?:language=en-US&:display_count=n&:origin=viz_share_link" num="5" text="Distribution of Character Sexual Orientations across Gender groups (1989-2021)"></Visualization>

                        <p>Not only do cisgender characters receive more representation in animated shows, but they also significantly outnumber non-cis-gendered characters when it comes to having a defined sexual orientation in addition to their gender identity.</p>

                        <p>The bar chart below illustrates the distribution of sexual orientations across gender groups of characters in cartoons. The y-axis is divided into gender groups, and each bar represents the percentage of the gender group represented by a specific sexual orientation. The x-axis indicates the percentage of the gender group represented. This bar chart allows us to compare the representation of sexual orientations across gender.</p>

                        <p>The bar graph illustrates a trend in queer characters often being narrowed down to solely their gender identity or their sexual orientation. About 80% of characters who are trans women and a shocking 100% of characters who are trans men have undetermined sexual orientations. Characters who do not identify as cis appear to have their queerness solely defined by their gender, whereas cisgendered characters appear to be written with more multidimensionality. A greater variance of sexual orientations is represented across cis-gendered characters, where homosexuality significantly makes up representations, followed closely by a less but notable amount of bisexual representations for cis men and women.</p>

                        <h3>Overall, gay and lesbian cisgender identities dominate queer representation</h3>
                        <p>All in all, gay and lesbian cisgender characters dominate queer representation in animation. The commodification of gay and lesbian representations could be a possible cause of queer identities with sexual orientations other than homosexuality being silenced in LGBTQIA+ media representations. Many media companies and writers noted that audiences dominated by heteronormative viewers find it easier to interpret the concept of homosexuality over other sexual orientations (Green 2013).</p>

                        <p>LGBTQIA+ representations have evolved from non-existent to the emergence of LGBTQIA+ character stereotypes commonly used queer media. A possible cause is the influx of neoliberalism, which has influenced queerness to be often homogenized in media. Media corporations have come to commodify queer identities (e.g., Pride month promotions) by creating an image of an “acceptable” queer which often tends to be cisgender paired with a queer sexual orientation, whereas non-cisgender identities are characterized solely by their gender and adding any sexuality to them would make them “too queer” for the piece of media (Hennessy 1994).</p>

                        <div id="challengestop">
                            <div style={{'margin-right': '10vw'}}>
                                <h3 style={{color: '#A259FF', 'font-weight': 'bold', 'text-align': 'left'}}>Challenges to queer representation in the children’s cartoon industry</h3>
                                <p style={{'text-align': 'left'}}>Rebecca Sugar is the show creator of the critically-acclaimed animated series “Steven Universe'' (2013-2019) on Cartoon Network, a coming-of-age story about a young boy named Steven Universe who lives with magical aliens called the Crystal Gems.</p>

                                <p style={{'text-align': 'left'}}>Sugar identifies as a bisexual nonbinary woman and is one of the first successful queer figures in the animation industry. Steven Universe won a Primetime Emmy Award for Animation in 2020 and was the first animated series to win the GLAAD Media Award for Outstanding Kids & Family Program in 2019. It contains a total of 11 queer characters who are all recurring characters with explicit representation.</p>

                                <p style={{'text-align': 'left'}}>According to a Paper Magazine interview in 2020, Sugar opened up about the opposition she received from Cartoon Network in 2012-2014 when she first introduced the concept of fusion in the show between the characters Sapphire and Ruby (who form Garnet) to depict a lesbian relationship. </p>
                            </div>
                            <img src={challengeleft} style={{width:'30vw', 'margin-right': '5vw'}} alt="Rebecca Sugar smiling and a quote that states: 'It seems absurd to think that only a few years ago and really now, that a person's job, their ability to make cartoons, could hinge on their sexual orientation, it's profoundly unfair and ridiculous but true” (Moen 2020).'"></img>
                        </div>

                        <p>She addresses the deficit in queer content creators and showrunners, noting how the studio could not recognize many of the queer experiences being depicted in Steven Universe. The show does not explicitly state that fusion represents the queer relationship between Sapphire and Ruby but lots of fans (a majority of whom are part of the LGBTQIA+ community) could recognize it. </p>

                        <p>However, the studio never caught on until it was aired and prohibited Sugar from including any more LGBTQIA+ content. Sugar was not allowed to publicly state the show had queer relationships as it posed risks to the show being pulled from a lot of countries (where any LGBTQIA+ representation is illegal in media) which would possibly lead to the show being canceled.</p>

                        <p>It was not until the show continued to grow exponentially in popularity in 2016, thanks to the fans and advancements in LGBTQIA+ rights (e.g. legalization of same-sex marriage), that Sugar was able to be more open about the show representing queer sexualities. Sugar’s bravery and commitment to her queer storytelling paved the way for other queer creators to be able to express their queer experiences more explicitly through animation.</p>

                        <h2>Genre and TV-rating breakdown of queer representation in animation</h2>
                        <h3>Queer representation mostly occurs in the comedy genre</h3>

                        <Visualization url="https://public.tableau.com/views/fig_6/Fig_6?:language=en-US&:display_count=n&:origin=viz_share_link" num="6" text="Genre breakdown of U.S. animated shows over time (1989-2021)"></Visualization>
                        <p>In the bar chart above, the x-axis depicts various genres while the y-axis displays the show count of US animated shows that have featured queer characters between 1989 and 2021.</p>

                        <p>As can be seen in the bar chart, queer representation is greatest in the comedy genre with 100 US animated shows between 1990 and 2021 featuring queer characters. The genres with the next highest frequencies of queer representation are adventure, fantasy, action, family, science fiction, and drama respectively with around 40 to 60 queer shows per genre. The rest of the genres — including musical, mystery, romance, and crime — have considerably less queer representation with less than 20 queer animated shows per genre.</p>

                        <p>Most shows in the dataset were part of multiple genres, but comedy appeared to be the dominant genre. This could be because the medium of animation is often used solely for the genre of comedy. For instance, when we think of comedy some might say Looney Tunes or The Simpsons (Fisher et al. 2008). Another potential explanation for the overrepresentation of queer characters in the comedy genre is that media, including TV shows, often make stereotypes and caricatures of queer characters to drive humor (Green 2013).</p>

                        <Visualization url="https://public.tableau.com/views/fig_7/Fig_7?:language=en-US&:display_count=n&:origin=viz_share_link" num="7" text="TV-Rating vs. IMDb Ratings of Animated Shows (1989-2021)"></Visualization>

                        <p>IMDb (Internet Movie Database) is an online database containing information and statistics about movies, TV shows, and various other media forms. It was first founded in 1990, which is why the earliest our data dates back to is 1989 for the animated show The Simpsons. IMDb votes are collected for each show, where IMDb users cast a vote (rating from 1 to 10) on the title and then the votes are aggregated and summarized to a single IMDb rating (1-10). IMDb ratings less than 5.0 are considered the lowest-rated and least-liked shows. IMDb ratings between 5 and 6.9 vary from average reception to relatively well-received. IMDb ratings of 7 or greater are considered acclaimed series and are highly rated.</p>

                        <p>A  TV rating is an age-based rating that tells viewers about the age group for which the program is appropriate. TV-14, TV-MA, and TV-PG are all considered mature audiences. TV-G is for general audiences. TV-Y and TV-Y7 are for young audiences (TV-Y being for 2-6 yrs old children and TV-Y7 for older children).</p>

                        <p>The circle-view chart above (Fig.7) illustrates the relationship between TV ratings and IMDb ratings of shows with LGBTQIA+ characters. IMDb votes are represented on the y-axis, where the circles are plotted. The circles are color-coded such that darker purples represent higher IMDb ratings. TV ratings are represented on the x-axis and the ratings are ordered from ratings for audiences in younger age groups to those in more mature age groups.</p>

                        <h3>Queer representation mostly occurs in shows rated for mature audiences and shows rated for older children</h3>
                        <p>We can see from a glance that most of the animated shows that include LGBTQIA+ characters are within the TV-MA and TV-Y7 categories, while TV-14 and TV-PG have a less but still notable amount. A strong majority of the shows, regardless of TV rating, appear to have ratings that range from average to very well-received (ratings from 6.0-9.0). There are a few outliers in the TV-MA rating section that have ratings less than 3, reflecting these shows in particular were extremely disliked compared to the rest of the animated shows. Overall, animated shows with queer characters appear to be relatively well-received regardless of TV rating. Shows that are critically acclaimed (ratings from 8.0-9.0), however, are more focused in the TV-MA and TV-Y7 categories which also contain the most animated shows with LGBTQIA+ characters.</p>

                        <p>Most animated shows with LGBTQIA+ characters still tend to be directed toward more mature audiences, demonstrating a fear among studios that the concept of LGBTQIA+ people is far too adult-like for younger or general audiences (Pitman 2022). We can see a deficiency in queer animated shows directed for general audiences with only three shows rated TV-G since 1989. </p>

                        <p>While LGBTQIA+ representation continues to grow in mature and adolescent media, there is still progress to be made within studios as the TV ratings continue to proliferate the concept that the inclusion of LGBTQIA+ identities is still considered too vulgar for the general audience. One possible explanation for this is how programs on cable networks, where viewers are charged subscription fees, were more likely to feature LGBTQIA+ content than those aired on commercial broadcast networks, which are essentially free to watch and more accessible to viewers (Fisher 2008). This implies that possibly studios are more likely to include more LGBTQIA+ characters when there is less risk involved when airing the animated show.</p>

                        <p>Furthermore, many surveys have shown that parents play an important role in exposing children to LGBTQIA+ characters involved in films, as the portrayal was prevented by the restriction of parents and censorship from the film industry (Drushel 2020). Since the parents are so strict about certain things relating to LGBTQIA+ can be displayed in the shows, the TV rating has been changed multiple times to adjust the level and censorship.</p>

                        <h2>Historical map of LGBTQIA+ rights over time</h2>
                        
                        <iframe src='https://flo.uri.sh/visualisation/11722873/embed' title='Interactive or visual content' class='flourish-embed-iframe' frameborder='0' scrolling='no' style={{width:'100%', height:'calc(600px + 10vh)'}}sandbox='allow-same-origin allow-forms allow-scripts allow-downloads allow-popups allow-popups-to-escape-sandbox allow-top-navigation-by-user-activation'></iframe>

                        <p>Pause the animation and hover over the point to read the event description.</p>

                        <p>We found a significant amount of advancements in LGBTQIA+ rights occurred during the 2010s. This could have possibly correlated with a cultural movement in LGBTQIA+ representations in the 2010s as the number of LGBTQIA+ characters skyrocketed after 2015 (Fig.1). </p>

                        <p>Major landmark events this could be attributed include the repealing of the “Don’t Ask, Don’t Tell” policy that ended a ban on gay men and lesbians serving openly in the military in 2011, as well as the legalization of same-sex marriage in 2015, and many more federal actions in Washington D.C. that improved LGBTQIA+ rights in the 2010s. </p>

                        <p>Such events possibly correlate with the increase in LGBTQIA+ characters in our dataset over time and likely influenced studios to be less fearful of censorship by featuring more explicit LGBTQIA+ representations and straying from “supporting existing systems of oppression in exchange for institutional recognition” (Kelso 2015).</p>

                        <img src={table} alt="two characters sitting at a diner table chatting" style={{'align-self': 'center'}}></img>

                        <h2>Conclusions</h2>
                        <p>Taking a holistic approach is vital to researching how LGBTQIA+ representation has transformed in U.S. animated shows between 1989 and 2021 by examining gender identities, sexual orientations, genre, and LGBTQIA+ history. Using our extensive dataset sourced from Kaggle, we find that LGBTQIA+ representations have skyrocketed since the 2010s and that explicit representations outnumber implicit representations across characters in U.S. animated shows.</p>

                        <p>Through our analysis of gender and sexual orientation represented across characters, we find that cisgender homosexual characters dominate LGBTQIA+ representations. Lesbian, gay, and bisexual representations continue to outnumber representations of other sexualities, with the highest percentage consisting of gay representations. Transgender, agender, intersex, genderfluid, and non-binary identities are severely under-represented in animated shows. Moreso, they are often exclusively defined by their gender identities, having undefined sexual orientations, compared to cisgender representations, which have defined sexual orientations. Our analysis of show genres and TV maturity ratings indicate that shows with LGBTQIA+ characters tend to be in the comedy genre, and directed towards older children and mature audiences, with a deficit in queer shows for general audiences.</p>

                        <p>It is important to acknowledge the heteronormative influences on LGBTQIA+ media, as it may indicate how specific LGBTQIA+ groups are perceived and represented. Most representations stop at queer identities who are cisgender and homosexual, and while these are just as important, and we encourage the continuation of these representations, it appears that the full spectrum of LGBTQIA+ groups continues to be silenced. Transgendered and other non-cis-gendered groups appear not to be considered equal when writing queer characters into shows in comparison to cisgender groups. This highlights how drastic disparities are within queer gender groups and across sexualities and prompts more research into finding the reason why.</p>

                        <p>According to LGTBQIA+ media studies so far, television consumption has been observed to inform viewers about beliefs, perspectives, attitudes, and behaviors. According to social cognitive theory, viewers often learn of symbolic experiences vicariously through television in which these experiences shape their social reality, what they find acceptable and not acceptable (Jennifer Ann 2022). Furthermore, cartoons can have a significant positive impact on a child’s psychology, which shows featuring LGBTQIA+ themes normalize the existence of queer identities and orientations for children, and help them navigate themselves through the LGBTQIA+ spectrum (Pitman 2022). If queer media has the potential to generate such far-reaching positive influence on the acceptance and visibility of LGBTQIA+ communities, we must continue to investigate how media (including animation) has shifted to incorporate more positive queer representation — and that we continue to encourage this process.</p>
                    </div>
                </div>
            </div>
        </Template>
    )
}

export default Narrative;