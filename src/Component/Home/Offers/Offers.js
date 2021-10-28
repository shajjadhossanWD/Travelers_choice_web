import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import SingleOffer from './SingleOffer/SingleOffer';

const Offers = () => {
    const [offers, setOffers] = useState([]);
    
    useEffect(()=>{
       fetch('http://localhost:5000/tourOffers')
       .then(res => res.json())
       .then(result => {
           setOffers(result);
           console.log(result);
       })
    },[])

    return (
        <div className="container">
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