import firebaseConfig from "./FirebaseConfig"
import { initializeApp } from "firebase/app";

const initializeAuthentication = () =>{
    initializeApp(firebaseConfig)
}

export default initializeAuthentication;