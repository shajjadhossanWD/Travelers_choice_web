import React, { useEffect, useState } from 'react';
import { ButtonGroup, Card, Col, Row } from 'react-bootstrap';
import useAuth from '../../Hooks/useAuth';
import './MyOrders.css';

const MyOrders = () => {
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
             
             <h1 className="my-5">My Orders</h1>
            <Row sm={1} md={2} lg={3} className="container mx-auto g-4 mb-5" >
               {
                   orders.map(order => <Col>
                    <Card>
                        <Card.Img variant="top" src={order.itemsImg} />
                        <Card.Body>
                        <Card.Title>{order.bookingItems}</Card.Title>
                        <Card.Text>
                         User Name: {order.name}
                        </Card.Text>
                        <ButtonGroup onClick={()=> handleDelete(order._id)} className="btn btn-danger p-2">Delete</ButtonGroup>
                        </Card.Body>
                    </Card>
                   </Col>)
               }
            </Row>
        </div>
    );
};

export default MyOrders;