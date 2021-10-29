import React from 'react';
import { Spinner } from 'react-bootstrap';
import { Redirect, Route } from 'react-router';
import useAuth from '../Hooks/useAuth';


const PrivateRoute = ({children, ...rest}) => {
    const {user, isloading} = useAuth()
    if(isloading){
      return <Spinner animation="border" variant="info" />
    }
    return (
        <Route
              {...rest}
      render={({ location }) =>
        user.displayName ? (
          children
        ) : ( 
            <Redirect
            to={{
              pathname: "/signIn",
              state: { from: location }
            }}
          />
        )
      }
        >

        </Route>
    );
};

export default PrivateRoute;