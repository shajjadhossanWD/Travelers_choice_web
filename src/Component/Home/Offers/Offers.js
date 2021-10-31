import React, { useState } from 'react';
import { Row } from 'react-bootstrap';
import useOffers from '../../../Hooks/useOffers';
import SingleOffer from './SingleOffer/SingleOffer';
import { css } from "@emotion/react";
import PacmanLoader from "react-spinners/PacmanLoader";

const spinnerCss = css`
  display: block;
  margin-bottom: 30px;
`;

const Offers = () => {
    const {offers} = useOffers()
    const [loading] = useState();
    return (
        <div className="container my-5">
            <h4 style={{color: 'tomato'}}>Choose Your Offers</h4>
            <h1 style={{color:'#0a3d62', marginBottom: '20px'}}>Select Your Best Offers <br /> For Your Travel</h1>
            <Row xs={1} md={2} lg={3} className="g-4">
               { offers.length? offers.map(offer => <SingleOffer key = {offer.id} offer={offer}></SingleOffer>)
                 :
                 <div className="spinner_div">
                 <PacmanLoader size={50} css={spinnerCss} loading={loading} color="tomato" /> 
                 </div>
               }
            </Row>
        </div>
    );
};

export default Offers;