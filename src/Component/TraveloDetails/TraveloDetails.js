import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const TraveloDetails = () => {
    return (
        <Row xs={1} lg={3} className="traveloDetails g-4 my-5 mx-3" >  
        <Col>
        <Card className="traveloCard w-100 h-100">
        <Card.Header as="div"><div style={{fontSize:'2rem'}}><span style={{color:'tomato'}}>TRA\</span>/ELO</div></Card.Header>
             <Card.Body>
             <Card.Title style={{color: 'tomato', fontSize:'1.5rem'}}>Welcome to Tourve</Card.Title>
             <Card.Text>
             Search Usa Travel Agency, Information from Trusted Internet Sources. Explore the Best Info Now. 100+ Unique Results. Find All Info You Want. Quick Answers. Useful & Relevant. Find in Seconds. Services: Secure Search, No.1 Answers, Trusted Results, 99% Match.Save Online. Compare Online. Simple Search. The Best Price. Compare Simply. Services: Compare, Search, Find Products, Many Offers.
             </Card.Text>
             </Card.Body>
         </Card>
         </Col>

        <Col>
        <Card className="traveloCard w-100 h-100">
             <Card.Body as="div">
               <div className="TraveloImg">
                   <div className="titlee">
                   <h1 style={{fontSize:'2.8rem', color:'white'}}><span style={{color:'tomato'}}>10+</span><br/>Years of experience</h1>
                   </div>
                 </div>
             </Card.Body>
         </Card>
         </Col>

        <Col>
        <Card className="traveloCard w-100 h-100">
        <Card.Header as="div"><div style={{fontSize:'2rem'}}><span style={{color:'tomato'}}>TRA\</span>/ELO</div></Card.Header>
             <Card.Body>
             <Card.Title style={{color: 'tomato', fontSize:'1.5rem'}}>Mission & Vission</Card.Title>
             <Card.Text>
             Search Usa Travel Agency, Information from Trusted Internet Sources. Explore the Best Info Now. 100+ Unique Results. Find All Info You Want. Quick Answers. Useful & Relevant. Find in Seconds. Services: Secure Search, No.1 Answers, Trusted Results, 99% Match.Save Online. Compare Online. Simple Search. The Best Price. Compare Simply. Services: Compare, Search, Find Products, Many Offers.
             </Card.Text>
             </Card.Body>
         </Card>
         </Col>
         </Row>
    );
};

export default TraveloDetails;