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
                    <Navbar/>
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
            <Footer/>
        </div>
  
    


            
    );
    }
}

export default Home;