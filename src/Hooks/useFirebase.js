import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged , signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initializeAuthentication from "../Firebase/FirebaseInit";

const Googleprovider = new GoogleAuthProvider();

initializeAuthentication();

const useFirebase =()=>{
 const [user, setUser] = useState({});
 const [error, setError] = useState(' ');
 const [isloading, setisLoading] = useState(true);
 const auth = getAuth();

//  Google sign in ................................... 
const signInUsingGoogle = () =>{
    setisLoading(true)
    return signInWithPopup(auth, Googleprovider);
}


useEffect(()=>{
    onAuthStateChanged(auth, user=>{
        if(user){
            setUser(user);
        }
        setisLoading(false);
    })
},[])


//logOut....................................................
const logOut = () =>{
    signOut(auth)
    .then(() =>{
        setUser({});
    })
    .finally(()=>setisLoading(false))


}
  


return {
   user,
   error,
   isloading,
   setisLoading,
   setUser,
   signInUsingGoogle,
   setError,
   logOut
}

}

export default useFirebase;