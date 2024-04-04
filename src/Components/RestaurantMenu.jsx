import { useParams } from "react-router-dom";
import { IMG_CDI } from "../Constant";
import Shimmer from './Shimmer'
import useRestaurant from "../Utils/useRestaurant";




const RestaurantMenu = ()=>{
  const { id } = useParams()

  console.log(id)


const restaurant =useRestaurant(id)




return (!restaurant) ? <Shimmer/> : (
  
  <>
  
  <img  className="img"  src={IMG_CDI+ restaurant?.cloudinaryImageId} alt="image" />
  <h2>{restaurant?.areaName}</h2>
  <h2>{restaurant?.city}</h2>
  <h2>{restaurant?.avgRating} stars</h2>
  <h2>{restaurant?.costForTwoMessage}</h2>
  <h2>{restaurant?.cuisines}</h2>
  
    </>
)
}

export default RestaurantMenu;