import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import Slider from "react-slick";
import './AboutUs.css';
class AboutUs extends Component {
    render(){
        const settings = {
            className: "center",
            centerPadding: "60px",
            dots: true,
            infinite: false,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 600,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
              ]
          };
  
    return (
        <div className="mb-5 mt-5">
        <h4 style={{color: 'tomato'}}>Our Traveller Say</h4>
        <h1 style={{color: '#0a3d62'}}>What Oue Traveller Say <br /> About Us</h1>
        <Slider {...settings}>
          <div>
            <div className="traveller">
            <Card className="travellerCard">
                <Card.Img variant="top" className="travellerImg" src="https://i.ibb.co/rw6534n/Duan-the-man-300x300.jpg" />
                <Card.Body>
                    <Card.Title> Traveller <span> Jhon Bearisto</span> </Card.Title>
                    <Card.Text>
                    This was a tour that was over two years in the making as it was delayed a full year when the world stopped vacation travel due to Covid. 
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
          </div>
          <div>
            <div className="traveller">
            <Card className="travellerCard">
                <Card.Img variant="top" className="travellerImg" src="https://i.ibb.co/Y0Cf5bm/local-contact-person-b-2.png" />
                <Card.Body>
                    <Card.Title>Traveller <span>Angalena Stivi</span> </Card.Title>
                    <Card.Text>
                    This Africa travel company provided excellent communication, recommendations, and service from our initial contact through a follow-up post-trip.
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
          </div>
          <div>
            <div className="traveller">
            <Card className="travellerCard">
                <Card.Img variant="top" className="travellerImg" src="https://i.ibb.co/0y1jjS4/images.jpg" />
                <Card.Body>
                    <Card.Title>Traveller <span> Stiven Hook</span> </Card.Title>
                    <Card.Text>
                    This was a tour that was over two years in the making as it was delayed a full year when the world stopped vacation travel due to Covid. 
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
          </div>
          <div>
            <div className="traveller">
            <Card className="travellerCard">
                <Card.Img variant="top" className="travellerImg" src="https://i.ibb.co/LCBJZPN/Dana-Mac-Grath-300x300.jpg " />
                <Card.Body>
                    <Card.Title>Traveller <span>Devaid Melan</span> </Card.Title>
                    <Card.Text>
                    This Africa travel company provided excellent communication, recommendations, and service from our initial contact through a follow-up post-trip.
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
          </div>
          <div>
          <div className="traveller">
            <Card className="travellerCard">
                <Card.Img variant="top" className="travellerImg" src="https://i.ibb.co/qsnZrXf/Nicolas-Roux-v2-300x300.jpg" />
                <Card.Body>
                    <Card.Title>Traveller <span>Mr. Watson</span> </Card.Title>
                    <Card.Text>
                    This was a tour that was over two years in the making as it was delayed a full year when the world stopped vacation travel due to Covid. 
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
          </div>
          <div>
           <div className="traveller">
            <Card className="travellerCard">
                <Card.Img variant="top" className="travellerImg" src="https://i.ibb.co/zZ9M0ws/b48f6250-e1594973237988-300x300.jpg" />
                <Card.Body>
                    <Card.Title>Traveller <span> Mrs. Julian</span> </Card.Title>
                    <Card.Text>
                    This Africa travel company provided excellent communication, recommendations, and service from our initial contact through a follow-up post-trip.
                    </Card.Text>
                </Card.Body>
            </Card>
            </div>
          </div>
        </Slider>
      </div>
    );
    }
};

export default AboutUs;