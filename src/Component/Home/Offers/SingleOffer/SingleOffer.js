import React from 'react';
import { ButtonGroup, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const SingleOffer = (props) => {
    const {name, title, img, _id} = props.offer;
    return (
    <Col>
      <Card>
        <Card.Img variant="top" src={img} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
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