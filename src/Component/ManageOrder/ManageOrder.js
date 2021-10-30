import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Row } from 'react-bootstrap';
import './ManageOrder.css';
const ManageOrder = () => {
    const [data, setData] = useState([]);
    const [deleteOrders, setDeleteOrders] = useState();

    
    useEffect(()=>{
    fetch('https://rocky-tor-45651.herokuapp.com/chooseOffers')
    .then(res => res.json())
    .then(result => {
       setData(result)
    })
   },[deleteOrders])
   
   const handleOrderDelete = (id) =>{
    const confirmDelete = window.confirm('Are you sure, you want to delete this Orders? Please Check it again')
    if(confirmDelete){
       fetch(`https://rocky-tor-45651.herokuapp.com/chooseOffers/${id}`, {
           method: 'DELETE',
           headers:{"content-type": "application/json"}
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
            <div className="manage_img">
                <h1 style={{color: 'tomato'}}>MANAGE ORDERS..</h1>
            </div>
             <div className="manage_order my-5 ">
             <h1>Manage Your Order</h1>
             <Row xs={1} md={2} lg={2}  className="g-4 container mx-auto manageAllOrder">
               {
                   data.map(order => (
                    <Col key = {order._id}>
                      <Card className="mx-auto mt-5 manageCard">
                        <div className="row g-0">
                        <div className="col-md-5">
                        <Card.Img variant="top" src={order.itemsImg} className="img-fluid h-100 w-100"/>
                        </div>
                        <div className="col-md-7">
                        <Card.Body>
                        <Card.Title as='div'><div><h5 style={{color: 'tomato'}}>{order.bookingItems}</h5></div></Card.Title>
                        <Card.Text as='div'>
                        <div>
                        <img src="" alt="" />
                        <p>Booked By :{order.name}</p>
                        <h6>Booking Date: {order.date}</h6>
                        <h6>Cost: ${order.Price}</h6>
                        </div>
                        </Card.Text>
                        <Button onClick={()=> handleOrderDelete(order._id)} className="manage-btn">Delete</Button>
                        </Card.Body>
                        </div>
                        </div>
                    </Card>
                   </Col>
                 ))
               }
            </Row>
             </div>
        </div>
    );
};

export default ManageOrder;