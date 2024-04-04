import { useState,useEffect } from "react"
import { FETCH_MENU_URL } from "../Constant";

const useRestaurant =(id) =>{
    const [restaurant,setRestaurant] = useState(null);

    //Get data from API

    
   useEffect( ()=>{
    getRestaurantInfo();
    },[])
    
    
    async function getRestaurantInfo () {
      const data = await fetch(FETCH_MENU_URL+id )
    
       const json = await data.json()
       const infoData = json.data?.cards[0]?.card?.card?.info
       
       console.log(infoData)
    
       setRestaurant(infoData)
    }

    //return restaurant Data
    return restaurant


}
export default useRestaurant;