import { IMG_CDI } from "../Constant";
const RestaurantCard =({
    name,cuisines,cloudinaryImageId,lastMileTravelString
  })=>{
    
    return (
    
     <div className='card'>
      <img src={IMG_CDI +cloudinaryImageId} />
      <h2>{name}</h2>
      <h3>{cuisines.join(',')}</h3>
      <h4>{lastMileTravelString}</h4>
  
     </div>
      
    )
  
  
  }
  export default  RestaurantCard;