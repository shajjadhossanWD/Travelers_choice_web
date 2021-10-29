import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';


export const AuthContext = createContext();

const Authprovider = ({children}) => {
    const allFirebase = useFirebase()
    return (
        <AuthContext.Provider value={allFirebase}>
            {children}
        </AuthContext.Provider>
    );
};

export default Authprovider;