import React, { useEffect, useState } from 'react';
import { ButtonGroup, Card, Col, Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import './MyOrders.css';
import { css } from "@emotion/react";
import PacmanLoader from "react-spinners/PacmanLoader";

// Loading spinner css ----------------------

const spinnerCss = css`
  display: block;
  margin-bottom: 30px;
`;


const MyOrders = () => {
    let [loading] = useState(true);
    const [orders, setOrders] = useState([]);
    const [deleteOrders, setDeleteOrders] = useState();
    const {user} = useAuth();

    const email = user.email;
    useEffect(()=>{
        fetch(`https://rocky-tor-45651.herokuapp.com/chooseOffers/${email}`)
        .then(res => res.json())
        .then(result => {
           setOrders(result)
        })
    },[deleteOrders]) 


    // Delete my order ------------------------

    const handleDelete =(id)=>{
     const confirmDelete = window.confirm('Are you sure, you want to delete this Orders? Please Check it again')
     if(confirmDelete){
        fetch(`https://rocky-tor-45651.herokuapp.com/chooseOffers/${id}`,{
            method: "DELETE",
            headers: {"content-type": "application/json"}
          })
           .then(res => res.json())
           .then(result =>{
               if(result.deletedCount > 0){
                   alert('deleted successfully')
                   setDeleteOrders(result)
               }
              
           })
     }
    
    }

    

    return (
        <div>
             <div className="Img_section">
                <h1>My Order Details</h1>
            </div>
             
             <h1 className="my-5" style={{color: '#0a3d62'}}>My Orders</h1>
            <Row xs={1} md={2} lg={3}  className="container mx-auto g-4 mb-5" >
               {orders.length?   orders.map(order => (
                    <Col>
                    <Card style={{backgroundColor:"#0a3d62", color: "white", width: '100%', height:'100%'}}>
                        <Card.Img variant="top" src={order.itemsImg} />
                        <Card.Body>
                        <Card.Title style={{color: "tomato"}}>{order.bookingItems}</Card.Title>
                        <Card.Text>
                         User Name: {order.name}
                        </Card.Text>
                        {
                            order.status? <ButtonGroup className="pending_btn">Approved</ButtonGroup>:<ButtonGroup className="pending_btn">Pending..</ButtonGroup>
                        }
                        
                        <ButtonGroup onClick={()=> handleDelete(order._id)} className="manage-btn">Delete</ButtonGroup>
                        </Card.Body>
                    </Card>
                   </Col>
                   ))
                   :
                   <div className="spinner_div">
                       <PacmanLoader size={50} css={spinnerCss} loading={loading} color="tomato" /> 
                   </div>
               }
            </Row>
        </div>
    );
};

export default MyOrders;