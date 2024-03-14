import { restaurantsList } from "../Constant";
import RestaurantCard from './RestaurantCard'

const Body =()=>{
    return(
      <div className='restauran-List'>
        { restaurantsList .map((restaurant)=>{
        return <RestaurantCard {...restaurant.info} key={restaurant.info.id}/>
        })}
      </div>
    
    )
    }

    export default Body;