import React from 'react';
import { Carousel } from 'react-bootstrap';
import './Banner.css';
const Banner = () => {
    return (
        <Carousel fade interval={1500}>
            <Carousel.Item className="carousel_about">
                <img
                className="d-block w-100  carouselImg"
                src="https://i.ibb.co/rFJLZFG/main-slider-1-1.jpg"
                alt="First slide"
                />  
                <Carousel.Caption className="carousel_about">
                <h1 className="text-white"> Amazing Tour</h1>
                <h1 className=" mx-auto">In Indonesia</h1>
                <h4 className="mx-auto">7 Days & 8 Night Tour</h4>
                </Carousel.Caption>
            </Carousel.Item>   
            <Carousel.Item>
                <img
                className="d-block w-100  carouselImg"
                src="https://i.ibb.co/PNgQgVD/main-slider-1-2.jpg"
                alt="Second slide"
                />

                <Carousel.Caption className="carousel_about">
                <h1 className="text-white"> Amazing Tour</h1>
                <h1 className=" mx-auto">In Spain</h1>
                <h4 className="mx-auto">7 Days & 8 Night Tour</h4>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="d-block w-100 carouselImg"
                src="https://i.ibb.co/cv5J3Yg/main-slider-1-3.jpg"
                alt="Third slide"
                />

                <Carousel.Caption className="carousel_about">
                <h1 className="text-white"> Amazing Tour</h1>
                <h1 className=" mx-auto">In Hampshire</h1>
                <h4 className="mx-auto">7 Days & 8 Night Tour</h4>
                </Carousel.Caption>
            </Carousel.Item>
    </Carousel>
    );
};

export default Banner;