import React, {Component} from "react";
import "./home.css";
import Navbar  from '../components/navbar';
import Footer  from '../components/footer';
import { Container, Row, Col, Button, Jumbotron } from 'reactstrap';
// import tempPic from '../images/p6.jpeg'

class Home extends Component {

//    

    

    render() {
    return (
        <div>
            <section id='pointyTop'>
                <div id='headerTron'>
                    <h1 className='jumboText'>
                        POWERLIFTING:
                    </h1>
                    <br/>
                    <h3 className='jumboSubText'>
                        The Journey
                    </h3>
                </div>
            </section>
            <Navbar />
            <Row>
                <Col xs="8">
                    <section id='bio'>
                        <h1 className='bioHeader'>
                            this is where the bio will go
                        </h1>
                        lorem mahhfuckin ipsum
                    </section>       
                </Col>
                <Col xs="4">
                <Container id="updateBar">
                    <section id='sideSection'>
                        <h1 className='secHead'>
                            Current Training Maxes
                        </h1>
                        <h3>Squat: 440</h3>
                        <h3>Bench: 260</h3>
                        <h3>Deadlift: 560</h3>
                    </section>
                    <section id='sideSection'>
                        <h1 className='secHead'>
                            Next Meet  
                        </h1>
                            <h3>January 4 2020</h3>
                    </section>
                    <section id='sideSection'>
                        <h1 className='secHead'>
                            Current Macros
                        </h1>
                        <h3>Carbs: 450 G</h3>
                        <h3>Protein: 200 G</h3>
                        <h3>Fats: 100 G</h3>
                    </section>
                    <section id='sideSection'>
                        <h1 className='secHead'>
                            Current Weight
                        </h1>
                        <h3>198 LB</h3>                        
                    </section>
                </Container>
                </Col>
            </Row>
        <Footer/>
        </div>
    );
    }
}

export default Home;