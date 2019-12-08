import React, {Component} from "react";
import { Link } from "react-router-dom";
import "./homePage.css";
import Navbar  from '../components/navbar';
import Footer  from '../components/footer';
import { Container, Row, Col, Button, Jumbotron } from 'reactstrap';
// import tempPic from '../images/p6.jpeg'

class Home extends Component {

//    

    

    render() {
    return (
        <div>
            <section id='header'>
                <Container id='headerCon'>
                    <div id='headTextDiv'>
                        <h1 className='headerText'>
                            Powerlifting: 
                        </h1>
                        <h3 className='headerSubText'>
                            The Journey
                        </h3>
                    </div>
                </Container>
                <Container id='bioCon'>
                    <div id='bioDiv'>
                        <p className='biotext'>
                        I am a biomedical engineer at the University of Michigan that has enjoyed lifting since high school. Initially, I lifted for football and basketball but ultimately I came to appreciate lifting far more than those sports. I have enjoyed many forms of lifting from a bodybuilding approach to powerlifting, the latter being what I currently enjoy and train for. In the last four years, I have gone from a 275 lb squat to roughly a 455 lb squat, 185 lb bench press to a 275 lb press, and my deadlift has gone from a 315 lbs to nearly 600 lbs. Along the way, I have made many mistakes, many terrible judgement calls, and been forced to learn a lot. The journey has been anything but smooth but lessons are plenty and frequent. 
                        </p>
                    </div>
                </Container>
            </section>

{/* sectionbreak */}

            <section id='stats'>
                <Container id='statsCon'>
                    <div id='bockdiv'>
                        <Row>
                            <Col>
                                <h1 className='secHead'>
                                    Current Training Maxes
                                </h1>
                                <h3>Squat: 440</h3>
                                <h3>Bench: 260</h3>
                                <h3>Deadlift: 560</h3>
                            </Col>
                            <Col>
                                <h1 className='secHead'>
                                    Next Meet  
                                </h1>
                                <h3>January 4 2020</h3>
                            </Col>
                            <Col>
                                <h1 className='secHead'>
                                    Current Macros
                                </h1>
                                <h3>Carbs: 450 G</h3>
                                <h3>Protein: 200 G</h3>
                                <h3>Fats: 100 G</h3>
                            </Col>
                            <Col>
                                <h1 className='secHead'>
                                    Current Weight
                                </h1>
                                <h3>198 LB</h3>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>

{/* sectionbreak */}

            <section id='training'>
                <Container id='trainingCon'>
                    <div id='trainingDiv'>
                    <h1 className='blockHead'>Training and Resources</h1>
                        <Row>
                            <Col>
                            <Container className='trainingBlock'>
                                <h1 className='secHead'>5/3/1</h1>
                                <h4>5/3/1 was the first program I ever ran and it really helped me with the mental confidence. It especially helped me break through the 315 lb barrier on squat and the 405 lb barrier on the deadlift. Each week involves a set that is taken to failure. Having run this program many times, I found common mistakes being to push things too hard too quick. Use training maxes that are 90-95% of your one-rep max. Also, use rep caps, there is no point of doing 12 reps when that day all you needed was 6 in order to suggest the following cycle needs 10 lbs added to it. This helps mentally in many ways but it will push your body too hard if you get greedy and take the amraps (as many reps as possible) too far. All in all, so long as one is approaching this program with the correct technique and a good to understand recovery modalities, this program is a lot of fun and brings a lot of progress with it. 
                                </h4>
                                <Link to='/531' target='_blank'><h4 className='traingBlockLink'>
                                Learn more about 5/3/1 here
                                </h4></Link>                            
                            </Container>
                            {/* new block */}
                            <Container className='trainingBlock'>
                                <h1 className='secHead'>Starting Strength</h1>
                                <h4>Starting strength is one of the tried and true programs that nearly every lifter has run or has contemplated running. The approach here is very simple and straightforward, with no advanced metrics for measuring progress and no overly complicated training methodologies. The program revolves around lifting three days a week with a focus on compound lifts which include the squat, bench press, deadlift, and overhead press. To supplement these movements, there is a lot of rowing and back work to be done. Anyone who is just getting into powerlifting or even the gym for that matter, this is a great program to look to if you need structure or don’t fully understand the inner workings of training. It is low frequency, recovery is simplified, it is exclusively the competition lifts, so you get many reps on your competition squat, bench, and deadlift. Additionally, Mark Rippetoe, the creator of this program preaches weight gain and when most people start lifting, it is a great time to gain weight, assuming they’re not already overweight. This is because of the overcompensation your body makes when it is tasked with lifting weights, the stimulus presented forces adaptation, this adaptation is often in the form of your body creating more muscle as well as neurological adaptation, which creates movement efficiencies. In short, this program is a great start to a lifting career, it is linear, so more weight should be added to each lift each week.
                                </h4>
                                <Link to='/startingStrenth' target='_blank'><h4 className='traingBlockLink'>
                                Learn more about Starting Strength here
                                </h4></Link>                            
                            </Container>
                            {/* new block */}
                            <Container className='trainingBlock lastOne'>
                                <h1 className='secHead'>PH3</h1>
                                <h4>PH3 was created by Dr. Layne Norton and while he’s been a controversial figure, there’s no questioning that this program works. Initially, Layne had said in order to run this program you should have a 300 Wilks, which was a good wilks score then but as a benchmark I’m near a 400 wilks when writing this, but it’s just not a good indicator of someone’s ability to run this program. This program is a DUP (daily undulating program) so expect to squat, bench, and deadlift 2-3 times a week. You must be attentive and mitigate issues such as tight hip flexors, deficiencies in your positioning, etc. Many people have run this program and had great results. Most of the people I’ve spoken to have acquired some type of injury from it. Ironically, Layne Norton has been battling injuries starting nearly immediately after releasing this program.  So a word to the wise, this is a very aggressive program, you will acquire a lot of fatigue and the frequency is relentless. If you intend to run this, use training maxes that are 90%-95% of your true max. This will help prevent injury and make it hopefully safer.
                                </h4>
                                <Link to='/PH3' target='_blank'><h4 className='traingBlockLink'>
                                Learn more about PH3 here
                                </h4></Link>                            
                            </Container>                                         
                            </Col>
                        </Row>
                    </div>
                </Container>
            </section>

{/* sectionbreak */}

            <section id='education'>
                <Container id='educationCon'>
                <h1 className='blockHead'>Education in Powerlifting</h1>
                    <Container className='trainingBlock'>
                        <h5 className='eduText'>
                            As an engineering student at the University of Michigan, I seek measurable indicators of progression. Physical activity is no exception, so as an athlete that valued time invested in the weight room setting, the prospect of being able to quantify progression according to the amount of weight added to the bar seemed logical. Thus, started the journey of powerlifting for myself. Without much help, this journey began alone and as progression was made, I began to connect with individuals and meet people. However, many people close to me held very polarizing opinions about powerlifting and encouraged me to not partake due to the violent nature of it. In contrast, the more I immersed myself in the sport, the more I realized that a rage-filled approach wasn’t often rewarded. Having met several world-record-holding lifters, they all seemed to be calculated, precise, and methodical with their approach, this, however, extended far beyond the weight room. This realization has left me with a very specific question, is there a correlation between education success and powerlifting success?
                            As an elementary step, it seemed I should inquire about preconceived notions of powerlifters currently.  I went to a gym in Bay City, Michigan and asked fifteen people to identify the powerlifter based on the two pictures provided. One picture was of Russel Ohrii (one of the best powerlifters in the world as of this moment) and the other was Michelle Carter, a woman’s gold medal-winning shot putter. A large majority of the participants selected Michelle Carter as the powerlifter. This seemed to be no coincidence and the rationale that summarized the majority of the thought process was that Russel was too small to be an effective powerlifter, whereas Michelle Carter was a large human who appeared to be the better equipped individual to move the most amount of weight. This consensus led to the desire to represent the sport that powerlifting is while attempting to explain the role education plays in powerlifting.
                            Realizing the misconceptions that many people abide by, I decided to investigate the level of education that the best lifters in the world have received. The premier federations being the USPA (United States Powerlifting Association) and the USAPL (USA Powerlifting). These two federations make up most of the raw lifters (no squat suits, deadlift suits, or knee wraps) that compete. Raw lifting is the purest form of powerlifting as it based solely on the lifter’s ability to lift the weight. When one takes a cross-sectional analysis of the top ten lifters of each federation the results are nearly overwhelming. In the USAPL, five of the top ten lifters are college-educated, one of which graduated from Massachusetts Institute of Technology where he obtained a mechanical engineering degree. The idea of half or 50% of the top lifters in the USAPL being college-educated suggests that there is a correlation between education and powerlifting success. This correlation is supported by the fact that the premier lifters of the USAPL have a higher likelihood of being a college-educated individual than the national average, which is ⅓ of the American population according to Census: More Americans have college degrees than ever before by Reid Wilson.
                            While the USAPL might have a strong education presence, I believe it is worth examining other federations to confirm the previously suggested correlation in the USAPL. The other federation to be examined was the USPA. While researching the educational background of the top ten lifters in the USPA, I was able to conclude that 40% of the lifters had graduated from college and one of the lifters was currently pursuing a degree in education. Stephi Cohen possesses the highest degree of education which was a doctorate in physical therapy. This group exceeded the national average by 7% and could potentially exceed it by 17% if/when C.C. Ingram graduates. Both the USAPL and USPA outperformed the national average which leads to the desire to know why this trend is apparent in powerlifting.
                            To further understand the relationship between education and progression in powerlifting, I sought out a national qualifier in the USAPL and conducted an interview. This interviewee was able to qualify for USAPL nationals and in the process became very familiar with the intricacies of competition and powerlifting. The intent of the interview was to understand what exactly went into becoming a national competitor and if any of that success was attributable to education. The participant was quick to inform me that throughout his preparation for a competition, a lot of problems had presented themselves. The most notable to him were fatigue management and movement alteration. He went on to elaborate on both, saying this about fatigue management, “during my preparation for competition it progressively got harder to recover due to the fact I was continuously increasing volume in order to stimulate a compensation effect near the end of prep”. This seems unorthodox so further clarification was desired, and the participant continued on to explain that due to the body’s ability to recover, near the end of preparation, you want to push as hard as possible and nearly overtrain, then in the last week or two of training you then minimize the effort in the gym in order for the body to recuperate. This can help a lifter to be the strongest on the day of the meet. This nugget of information was something that few know but is certainly understandable.  When asked where this information was acquired from the participant had this to say, “When I was getting into this I found various forms of education on how to properly peak for a meet and across the board, all programs took heavy rep work a couple of weeks out with the purpose of exhausting oneself in order to then pull off the gas and let the body fully recover”. This seemed to suggest that there is a method for the programming a lifter receives in order to maximize their performance at their meet and while concluding this, it also seemed apparent that the interviewee possessed education outside of the realm of powerlifting. The diction and the way in which words were used was very precise while being observant of putting thoughts in palatable sentences in order to not lose the audience in his explanation. This tendency was very appreciable as it ensures that I was able to understand and utilize all the information he was attempting to convey.
                            In the preparation leading up to meets, it seems that most lifters are very calculated, and the interviewee suggested that this was incredibly common. To verify what was discussed in the interview, I researched some of the top lifters. One of the lifters that were very transparent with their approach to powerlifting was Sean Noriega. Sean documented his preparation leading up to Raw Nationals (the most competitive national level powerlifting competition) in which he highlighted the precision that leads to success, this came about in a YouTube video where he said, “... at the highest level of anything you’re attention to detail is everything”. Sean’s view on precision mirrored the way in which the interviewee was attentive to the word choice he used. Additionally, Sean discussed the rationale for training as the interviewee had suggested, as well as the science behind acquiring proper bloating and water manipulation for the meet. These seeming nuance details have been controlled and refined in order to give the best meet day performance and this was observed across all lifters at the top of the USAPL rankings. This supported what the interviewee had suggested and brought other details to light as well, it has seemed to be made apparent that in order to be able to perform as well as possible that things must be managed and calculated in order to toe the lines of too much and not enough. This attention to detail makes powerlifting a very accurate and precise sport.
                            While realizing the details and being attentive is one thing, it doesn’t necessarily demand a college education, so I discussed commonalities between the two with the interviewee, to gather further insight. When asked if education was necessary for progression the participant responded by saying, “a lifter either needs to be very educated [on powerlifting] and able to govern themselves which is probably the hardest, or a lifter needs a coach to tell them what to do and the coach needs to know how the lifter operates and what they respond best to. So yes, in short”.  This type of education is certainly important but still didn’t suggest a strong correlation to formal education, however with further questioning and conversation, it did become apparent that formal education did lend itself to successful powerlifters. As the interviewee recalled his first meet, he mentioned that “The successful powerlifters I have interacted with had a unifying trait which was their ability to problem solve. Whether it was elbow tendonitis, a food allergy, or how to execute a lift, they were always analyzing and looking for solutions”. This explanation makes sense due to the idea that college education is a rather long process for most of the people enrolled (4 years is nearly 20% of the time a typical college student has spent on this earth) and one that demands a constant ability to assess situations and determine potential solutions.  Getting stronger is no quick task and certainly not a smooth one so the ability to recognize and remedy any issue in college shares a very similar process to how one would approach solving an issue that impacts a lifter’s progression.
                            While not every powerlifter is a full-fledged academic there is a high level of education amongst the top performers in the two largest federations. This isn’t due to the direct correlation of formal education leading to improved lifts and a bigger total but more so the mindset a lifter utilizes. Formal education teaches individuals to be precise, observant, and mitigate potentially harmful circumstances. Also, prioritization and stress management are attributes one can obtain from academia that can improve a lifter’s quality of work. These seemingly small details make a large difference over time and can be a major contributor to the success of a powerlifter. To help people actualize their potential in the realm of powerlifting, it is apparent that education can do no harm. Education will help ensure that lifters are attentive to the details of their training, and this attention to detail will significantly help a lifter improve.  
                        </h5>
                    </Container>
                    {/* new block */}
                    <Container className='trainingBlock'>
                        <h1 className='secHead'>Importance of Bracing</h1>
                        <h4>While many injuries seem inevitable in powerlifting, there are many things you can do to prevent them. The protection of your spine is no exception and many safeguards can be taken. In order to understand how to stay safe and stable while lifting, a pop can analogy is often used. A pop can that is close is very stable when weight is applied to the top, but if the can has a leak or is open it then becomes incapable of handling load. This is in many ways comparable to your bracing. In order to protect your spine, one should attempt to create significant pressure between the ribcage and pelvis. This will give you the most stable and strongest, core possible. In order to cue this, one should attempt to push out in all directions of their abdominal region. This is a good way to begin to brace, a further understanding and analysis can be gain through kabuki strength’s explanation.
                        </h4>
                        <Link to='/kabuki' target='_blank'><h4 className='traingBlockLink'>
                        Learn more about kabuki here
                        </h4></Link>                            
                    </Container>
                    {/* new block */}
                    <Container className='trainingBlock'>
                        <h1 className='secHead'>Calculate Macros</h1>
                        <h4>
                        Macronutrients (also called macros relatively frequently) are often a topic of focus in any competitive athletic realm. Powerlifting is no exception, whether you’re a super heavyweight or a 47 kg competitor, tracking macronutrients to help aide in performance or long term goals is a necessity. Tracking macros helps to keep people honest with there food, while also quantifying calorie consumption. Calories are incredibly important for recovery as well as for losing weight. Regardless of what your desired outcome is, tracking macros will surely help you achieve it, attached below is a link for the video that I used to begin to understand macronutrients and how to track them, other videos by 3DMJ expanded on points made in the following video as well.                    </h4>
                        <Link to='/3dmj' target='_blank'><h4 className='traingBlockLink'>
                        Learn more about 3DMJ here
                        </h4></Link>                            
                    </Container>   
                    {/* new block */}
                    <Container className='trainingBlock lastOne'>
                        <h1 className='secHead'>Ankle Distraction</h1>
                        <h4>
                        When facing mobility issues in regards to your ability to perform dorsiflexion, there are a couple of approaches but the one I’ve found to be useful is banded ankle distractions. While using a band attached to your ankle and a sturdy foundation, you push your knee past your ankle creating dorsiflexion. Continuing to perform this movement multiple times will lead to it becoming more mobile at a specific point in time (following this drill), while continuing over a long period of time will result in additional mobility at all points of time. This has helped me to eliminate issues I have faced in the squat and resolved some knee pain that I had faced.
                        </h4>
                        <Link to='/ankle' target='_blank'><h4 className='traingBlockLink'>
                        Learn more about PH3 here
                        </h4></Link>                            
                    </Container>           
                </Container>
            </section>

{/* sectionbreak */}

            <section id='philosophy'>
                <Container id='educationCon'>
                <h1 className='blockHead'>Grit: Throughout time</h1>
                    <Container className='trainingBlock'>
                        <h5 className='eduText'>
                        Many think the word grit is another way of saying persistence, however, that is only partially true. While in high school I encountered a teacher who used the word grit to highlight a quality of successful students, to him grit meant persistence. However, as I progressed through high school and college I wondered if that truly was what grit meant. 
                        As the popularity of the word grew and began to be used more and more in social media and other places where the gospel of success is preached, my curiosity grew to an insatiable amount. So now the question of “What does grit truly mean?” deserves an answer since it is so commonly used and has come to encompass many meanings over the years.
                        Grit has several definitions and it seems as nearly all of them are different. The Webster dictionary suggests grit is, “firmness of mind or spirit: unyielding courage in the face of hardship or danger.'' While that might be true, I find that to not be satisfactory as it is relative and leaves ambiguity. Surely not every “gritty” person is facing danger as they choose their next actions. This definition might be applicable in some settings but certainly doesn’t include most “gritty” individuals. So, to discover the truest and unadulterated meaning of the world one should turn to the study of the psychological trait that grit is.
                        The current working definition posed by Angela Duckworth, the leading psychological expert in Grit, is, ‘“passion and sustained persistence applied toward long-term achievement, with no particular concern for rewards or recognition along the way.”’ This definition was concluded based on the results of the study performed by Duckworth and company. Where individuals were studied that performed exceptionally well in some of the most difficult circumstances, these difficulties are situations where failure is very prevalent and potential, therefore this definition includes physically dangerous circumstances but isn’t exclusively those situations. Certainly, persistence is represented in this definition and many others that attempt to explain grit, however, a crucial element to Duckworth’s definition is the lack of concern of recognition and the passion possessed by the individual. This is crucial because the people that exemplify grit are working for something that they value nearly above all else, their passion. Passion is something that is unquantifiable and something that Duckworth didn’t attempt to measure. However, each person studied pursued the achievement of something no matter what arose or interfered with their endeavor, they did not stray for the goal. Additionally, time is not a constraint to them. The end results justified the journey in this case. Again, when one is passionate and believes in something time is nearly irrelevant to them because they are doing what they feel compelled to do. 
                        As grit has evolved throughout the years, it has come to be associated with two predominant comparisons, those being success and intelligence. Grit and success go hand and hand so long as success is defined as completion of the task at hand, whatever that may be. People that exemplify grit complete the task and achieve the goal that is desired with a much higher success rate than those with less grit. However, the correlation between intelligence and grit is not a positive one. Duckworth and fellow researchers concluded that grit was either unassociated with intelligence or opposite of intelligence as shown by the following, “In four separate samples, grit was found to be either orthogonal to or slightly inversely correlated with intelligence”. This correlation is particularly interesting due to the presence of sayings such as hard work beats talent when talent refuses to work hard, due to the validity of it. This information is particularly applicable in showing people that anyone can achieve great things regardless of their IQ or other intelligence measures so long as one possesses an adequate amount of grit.
                        Grit is many things, but above all, it entails a person having a passion for what they’re doing. Duckworth’s explanation and studies on grit have done a phenomenal job of explaining and bringing awareness to the psychological trait that is grit. The clarity in definition allows for people that want to achieve “success” to be more aware of the characteristics and qualities they should attempt to cultivate. It brings focus to the fact that one should find their passion and embark upon developing or pursuing it. Understanding what grit is allows one to not be fooled by social media or misleading definitions of it. To be able to understand what grit is brings one closer to their goals, passions, and dreams. 
                        <h4>Works Cited</h4>
                        Angela Lee Duckworth & Patrick D. Quinn (2009) Development and Validation of the Short Grit Scale (Grit–S), Journal of Personality Assessment, 91:2, 166-174, DOI: 10.1080/00223890802634290
                        Fessler, Leah. "You're no genius": Her father's shutdowns made Angela Duckworth a world expert on grit." Quartz at Work. 28 Mar. 2018. Quartz. 23 Sept. 2019 
                        <Link to='/ankle' target='_blank'><h4 className='traingBlockLink'>
                        Read more here!
                        </h4></Link>  
                        “Grit.” Merriam-Webster, Merriam-Webster, </h5>
                    </Container>
                </Container>
            </section>
            <Footer/>
        </div>


            
    );
    }
}

export default Home;