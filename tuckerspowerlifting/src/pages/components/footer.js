import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { Container, Col, Row } from 'reactstrap';
import { Component } from 'react';
import { Link } from "react-router-dom";
import "./footer.css";


class Footer extends Component{
render() {
return (
    <div>
        <Container id='footCon'>
          <Row>
            <Col >
              <h3 id='footText'>Follow me here</h3>
              <Link to='/gram' target='_blank'><FaInstagram id="insta"/></Link>
            </Col>
          </Row>
          <br/>         
          <Row>
              <Col>
                  <h3 id='footText'> Tucker@gmail.com</h3>
              </Col>
              <Col>
                  <h3 id='footText'>&copy; 2019 Tucker Endersbee</h3>
              </Col>
              <Col>
                  <h3 id='footText'>&copy; 2019 Tucks Training</h3>
              </Col>
          </Row>
        </Container>
    </div>
    );
  }
}
export default Footer;

