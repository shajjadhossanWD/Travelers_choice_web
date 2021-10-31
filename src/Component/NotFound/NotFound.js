import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className="notFound">
        <img src="https://i.ibb.co/8zGNCtH/404-html-after.webp" alt="" />
             <h2>Sorry , this page is not exist</h2>
             <p><b>Back to <Link to="/home">Home Page</Link></b></p>
        </div>
    );
};

export default NotFound;