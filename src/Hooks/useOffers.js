import { useEffect, useState } from "react";

const useOffers =()=>{
    const [offers, setOffers] = useState([]);
    
    useEffect(()=>{
       fetch('https://rocky-tor-45651.herokuapp.com/tourOffers')
       .then(res => res.json())
       .then(result => {
           setOffers(result);
           console.log(result);
       })
    },[])

    return{
        offers,
        setOffers
    }
}
export default useOffers;