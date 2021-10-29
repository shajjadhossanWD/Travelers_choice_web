import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import './SingleOfferDetails.css';
import Rating from 'react-rating';

const SignleOfferDetails = () => {
    const {id} = useParams();
    const [offers, setOffers] = useState({});
    useEffect(()=>{
        fetch('https://rocky-tor-45651.herokuapp.com/tourOffers')
        .then(res => res.json())
        .then(result => {
            const data = result.find(offer => offer._id === id)
            setOffers(data);
        })
    },[])

    return (
        <div>
           <div className="detailsImg">
                <h1>Tour Package Details</h1>
           </div>
             <div className="container my-5 row mx-auto">
                <div className="img_div col-lg-6 ">
                 <img src={offers.img} width="100%" alt=""/>
                
                 <div className="ratingDiv">
                 <h3>{offers.name}</h3>
                 <Rating
                    className="ratings"
                    initialRating={offers.rating}
                    emptySymbol="far fa-star"
                    fullSymbol="fas fa-star"
                    />
                    <h5>Duration: <span>{offers.time}</span></h5>
                 </div>
                </div>
                  <div className="col-lg-6 details">
                      <h2>{offers.name}</h2>
                      <p>{offers.description}</p>
                      <h1><span>${offers.price}</span> only</h1>
                  </div>
                  <button className="w-25 mx-auto button">Book now</button>
             </div>
        </div>
    );
};

export default SignleOfferDetails;