import React from 'react';
import {useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import './SignIn.css';
const Login = () => {
    const { signInUsingGoogle} = useAuth();
    const location = useLocation()
    const history = useHistory()

    const handleGoogleBtn = () =>{
        const redirectAuth = location.state?.from || "/home"
        signInUsingGoogle()
        .then(result =>{
            history.push(redirectAuth);
        })
    }
    return (
        <div className="container">
           
              <div className="signIn"> 
                 <div className="cardLogIn">
                 <h1>Please signIn</h1> 
                 <button className="btn btn-primary" onClick={handleGoogleBtn}>Google SignIn</button>
                 </div>   
               </div>
           </div>
    );
};

export default Login;