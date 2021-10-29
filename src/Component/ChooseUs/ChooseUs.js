import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './ChooseUs.css';

const ChooseUs = () => {
    return (
        <div className="chooseUsDiv">
            <h4>Why Travelo?</h4>
            <h1>Why You Are <br /> Travel With Travelo</h1>

            <Row xs={1} sm={1} md={2} lg={4} className="container mx-auto"> 

            {/* 1st card.....................   */}
               <Col>
               <Card className="About_Card">
               <Card.Header><i class="fas fa-user-tie eventIcon"></i></Card.Header>
                    <Card.Body>
                    <Card.Title>2000+ Our <br /> worldwide guide</Card.Title>
                    </Card.Body>
                </Card>
                </Col>
              
              {/* 2nd card ..........................  */}

               <Col>
               <Card  className="About_Card">
               <Card.Header><i class="fas fa-handshake eventIcon"></i></Card.Header>
                    <Card.Body>
                    <Card.Title>100% trusted travel agency </Card.Title>
                    </Card.Body>
                </Card>
                </Col>
                
                {/* 3rd card ---------------------------- */}

                <Col>
                <Card className="About_Card">
               <Card.Header><i class="fas fa-car-side eventIcon"></i></Card.Header>
                    <Card.Body>
                    <Card.Title>10+ year of travel experience</Card.Title>
                    </Card.Body>
                </Card>
                 </Col>
              
              {/* 4th card ------------------------ */}

                <Col>
                <Card className="About_Card">
               <Card.Header><i class="fas fa-users eventIcon"></i></Card.Header>
                    <Card.Body>
                    <Card.Title>90% of our traveller happy</Card.Title>
                    </Card.Body>
                </Card>
                 </Col>
               </Row>
        </div>
    );
};

export default ChooseUs;