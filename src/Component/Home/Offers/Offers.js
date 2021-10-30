import React from 'react';
import { Row } from 'react-bootstrap';
import useOffers from '../../../Hooks/useOffers';
import SingleOffer from './SingleOffer/SingleOffer';

const Offers = () => {
    const {offers} = useOffers()

    return (
        <div className="container my-5">
            <h4>Choose Your Offers</h4>
            <h1>Select Your Best Offers <br /> For Your Travel</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
               {
                   offers.map(offer => <SingleOffer key = {offer.id} offer={offer}></SingleOffer>)
               }
            </Row>
        </div>
    );
};

export default Offers;