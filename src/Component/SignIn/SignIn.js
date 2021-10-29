import React from 'react';
import {useLocation, useHistory} from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

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
           <h1>Please signIn</h1> 
              <div className="signIn">    
                 <button className="btn btn-primary" onClick={handleGoogleBtn}>Google SignIn</button>
               </div>
           </div>
    );
};

export default Login;