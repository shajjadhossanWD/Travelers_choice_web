import React from 'react';
import { ButtonGroup, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleOffer = (props) => {
    const {name, title, img, _id} = props.offer;
    return (
    <Col>
      <Card style={{width:"100%", height:"100%", backgroundColor:"#0a3d62", color: "white"}}>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title style={{color: "tomato"}}>{name}</Card.Title>
          <Card.Text>
           {title}
          </Card.Text>
          <Link to={`/offers/${_id}`}>
                <ButtonGroup className="button btn btn-primary">Book Now</ButtonGroup>
                </Link>
        </Card.Body>
      </Card>
    </Col>
    );
};

export default SingleOffer;