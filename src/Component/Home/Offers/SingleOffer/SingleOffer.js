import React from 'react';
import { ButtonGroup, Card, Col } from 'react-bootstrap';

const SingleOffer = (props) => {
    const {name, title, img} = props.offer;
    return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
           {title}
          </Card.Text>
          <ButtonGroup className="button">Book Now</ButtonGroup>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default SingleOffer;