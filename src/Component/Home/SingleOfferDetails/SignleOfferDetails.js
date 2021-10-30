import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import './SingleOfferDetails.css';
import Rating from 'react-rating';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';
import axios from 'axios';

const SignleOfferDetails = () => {
    const { id } = useParams();
    const [offers, setOffers] = useState({name: '' , img: ''});
    const {user} = useAuth();
    useEffect(() => {
        fetch('https://rocky-tor-45651.herokuapp.com/tourOffers')
            .then(res => res.json())
            .then(result => {
                const data = result.find(offer => offer._id === id)
                setOffers(data);
            })
    }, [])

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
       axios.post("https://rocky-tor-45651.herokuapp.com/chooseOffers", data)
       .then(res => {
           if(res.data.insertedId){
               alert('added successfully')
               reset();
           }
       })
     }

    return (
        <div>
            <div className="Img_section">
                <h1>Tour Package Details</h1>
            </div>
            <div className="container my-5 row mx-auto">
                <div className="img_div col-lg-7 ">
                    <img src={offers.img} width="100%" alt="" />

                    <div className="ratingDiv">
                        <h1>{offers.name}</h1>
                        <Rating
                            className="ratings"
                            initialRating={offers.rating}
                            emptySymbol="far fa-star"
                            fullSymbol="fas fa-star"
                        />
                        <h5>Duration: <span>{offers.time}</span></h5>
                        <div className="details">
                            <p>{offers.description}</p>
                            <h1><span>${offers.price}</span> only</h1>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5 details">
                    <h1>Book This Package</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="inputData" {...register("name")} value={user.displayName || ''}/>
                        <input className="inputData" {...register("email")} value={user.email || ''}/>
                        <input className="inputData" {...register("date")} placeholder="booking date" />
                        <input className="inputData" {...register("address")} placeholder="your current address"/>
                        <input className="inputData" {...register("bookingItems")} defaultValue={offers.name} />
                        <input className="inputData" {...register("itemsImg")} defaultValue={offers.img} />
                        <input className="inputData" type="number" {...register("Price")} defaultValue={offers.price} />
                        <input className="inputData button" type="submit" />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default SignleOfferDetails;