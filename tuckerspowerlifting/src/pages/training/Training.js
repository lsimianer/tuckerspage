

import React, {Component} from "react";
import { Link } from "react-router-dom";
import Navbar  from '../components/navbar';
import Footer  from '../components/footer';
import { Container, Row, Col, Button, Jumbotron } from 'reactstrap';
// import tempPic from '../images/p6.jpeg'

class Training extends Component {  

render() {
    return (
        <div>
            {/* begin training */}
            <Navbar/>
            <section id='stats'>
            <Container id='statsCon'>
                <div id='bockdiv'>
                    <Row>
                        <Col>
                            <h1 className='trainingSecHead'>
                                Current Training Maxes
                            </h1>
                            <h3>Squat: 440</h3>
                            <h3>Bench: 260</h3>
                            <h3>Deadlift: 560</h3>
                        </Col>
                        <Col>
                            <h1 className='trainingSecHead'>
                                Next Meet  
                            </h1>
                            <h3>January 4 2020</h3>
                        </Col>
                        <Col>
                            <h1 className='trainingSecHead'>
                                Current Macros
                            </h1>
                            <h3>Carbs: 450 G</h3>
                            <h3>Protein: 200 G</h3>
                            <h3>Fats: 100 G</h3>
                        </Col>
                        <Col>
                            <h1 className='trainingSecHead'>
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
            <Footer/>
        </div>
        );
    }
}
    
export default Training;