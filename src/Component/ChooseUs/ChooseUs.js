import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import './ChooseUs.css';

const ChooseUs = () => {
    return (
        <div className="chooseUsDiv">
            <h4 style={{color: 'tomato'}}>Why Travelo?</h4>
            <h1 style={{color: '#0a3d62'}}>Why You Are <br /> Travel With Travelo</h1>

            <Row xs={1} sm={1} md={2} lg={4} className="container mx-auto"> 

            {/* 1st card.....................   */}
               <Col>
               <Card className="About_Card" >
               <Card.Header><i className="fas fa-user-tie eventIcon" style={{color: 'tomato'}}></i></Card.Header>
                    <Card.Body>
                    <Card.Title>2000+ Our worldwide guide</Card.Title>
                    </Card.Body>
                </Card>
                </Col>
              
              {/* 2nd card ..........................  */}

               <Col>
               <Card  className="About_Card">
               <Card.Header><i className="fas fa-handshake eventIcon" style={{color: 'tomato'}}></i></Card.Header>
                    <Card.Body>
                    <Card.Title>100% trusted travel agency service </Card.Title>
                    </Card.Body>
                </Card>
                </Col>
                
                {/* 3rd card ---------------------------- */}

                <Col>
                <Card className="About_Card">
               <Card.Header><i className="fas fa-car-side eventIcon" style={{color: 'tomato'}}></i></Card.Header>
                    <Card.Body>
                    <Card.Title>10+ year of travel experience</Card.Title>
                    </Card.Body>
                </Card>
                 </Col>
              
              {/* 4th card ------------------------ */}

                <Col>
                <Card className="About_Card">
               <Card.Header><i className="fas fa-users eventIcon" style={{color: 'tomato'}}></i></Card.Header>
                    <Card.Body>
                    <Card.Title>90% of our traveller is happy </Card.Title>
                    </Card.Body>
                </Card>
                 </Col>
               </Row>
        </div>
    );
};

export default ChooseUs;