import React from 'react';
import AboutUs from '../AboutUs/AboutUs';
import ChooseUs from '../ChooseUs/ChooseUs';
import TraveloDetails from '../TraveloDetails/TraveloDetails';
import Banner from './Banner/Banner';
import './Home.css';
import Offers from './Offers/Offers';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TraveloDetails></TraveloDetails>
            <Offers></Offers>
            <ChooseUs></ChooseUs>
            <AboutUs></AboutUs>
        </div>
    );
};

export default Home;