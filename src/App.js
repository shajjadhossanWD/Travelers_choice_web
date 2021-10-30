import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Component/Home/Home';
import Header from './Component/Header/Header';
import Authprovider from './Context/Authprovider';
import SignleOfferDetails from './Component/Home/SingleOfferDetails/SignleOfferDetails';
import PrivateRoute from './PrivateRoute/PrivateRoute';
import SignIn from './Component/SignIn/SignIn'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Footer from './Component/Footer/Footer';
import MyOrders from './Component/MyOrders/MyOrders';
import AddOffers from './Component/AddOffers/AddOffers';



function App() {
  return (
    <div className="App">
    <Authprovider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/offers/:id">
            <SignleOfferDetails></SignleOfferDetails>
          </PrivateRoute>
          <Route path="/my_orders">
            <MyOrders></MyOrders>
          </Route>
          <Route path="/add_new_offers">
            <AddOffers></AddOffers>
          </Route>
          <Route path="/signIn">
             <SignIn></SignIn>
          </Route>
        </Switch>
        <Footer></Footer>
      </Router>
      </Authprovider>
    </div>
  );
}

export default App;
