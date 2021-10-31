import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';
import './AddOffers.css' ;

const AddOffers = () => {


    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
       axios.post("https://rocky-tor-45651.herokuapp.com/tourOffers", data)
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
                <h1>Add Your Favourite Tourism Offer</h1>
            </div>

            <div className="addForm my-5">
                  <h1>Add Your Offers</h1>               
                  <form onSubmit={handleSubmit(onSubmit)} className="addInput mx-auto">
                        <input className="inputData" {...register("name")} placeholder="offers name" />
                        <input className="inputData" {...register("title")} placeholder="short description" />
                        <input className="inputData" {...register("description")} placeholder="details description" />
                        <input className="inputData" {...register("time")} placeholder="tour duration"/>
                        <input className="inputData" {...register("img")} placeholder="your image url"/>
                        <input className="inputData" type="number" {...register("price")} placeholder="price"/>
                        <input className="inputData" type="number" {...register("rating")} placeholder="rating out of 5"/>
                        <input className="inputData button" type="submit"/>
                    </form>
            </div>
        </div>
    );
};

export default AddOffers;