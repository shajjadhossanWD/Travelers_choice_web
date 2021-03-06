import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <div className="footer">
        <div className="row container mx-auto">
            <div className="col-lg-4">
             <h1 style={{color:'tomato'}}>Travelo</h1>
             <p className="w-75">Thanks for visit Travelo , stay with us and keep supporting. We are always available for Provide you Our best Services. Thank you visit again</p>
              <h5>Follow Us.</h5>
              <i className="fab fa-facebook-square fs-2 me-3"></i>
              <i className="fab fa-twitter-square fs-2 me-3"></i>
              <i className="fab fa-linkedin fs-2 me-3"></i>
            </div>
            <div className="col-lg-4 mb-5 departments ">
              <h2 style={{color:'tomato'}}>Contact Us</h2>
               <div className="contactsPhn">
                    <p><i style={{color:'tomato'}} className="fas fa-blender-phone fs-1"></i></p>
                    <p><b> +88013131236433</b></p>
                    <p><b>+88018243541433</b></p>
               </div>
               <div className="contactEmail">
                    <p><i style={{color:'tomato'}} className="fas fa-envelope-open-text fs-1"></i></p>
                    <p><b>shajjadhossan124@gamil.com</b></p>
                    <p><b>traveloweb54@gamil.com</b></p>
               </div>
            </div>
            <div className="col-lg-4 mb-4 Operation_time">
              <h2 style={{color:'tomato'}}>Support</h2>
                <p>Best provided Services</p>
                <p>Well facilities</p>
                <p>Easy payment method</p>
                <p>Easy to Booking</p>
                <p>24/7 Support</p>
                <p>Good Communication</p>
            </div>
         </div>
            <p style={{color: 'tomato', textAlign:'center'}}><small>@Copyrights2021.com</small></p>
        </div>
    );
};

export default Footer;