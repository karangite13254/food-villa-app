import { useEffect, useState } from "react";
// import { restaurantsList } from "../Constant";
import RestaurantCard from "./RestaurantCard";
import axios from "axios";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../Utils/Helper";






const Body = () => {
  const [allRestaurants,setAllRestaurants]=useState([]);
  const [filteredrestaurants, setfilteredrestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  // async function getRestaurants() {
  //   const data = await fetch(
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LIS"
  //   );
  //   const json = await data.json();
  //   console.log("fetch", json);
  // }

  const _getRestaurants = ()=>{
    axios.get("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LIS")
    .then(response => {
      // Do something with the fetched data
      let _restaurants = response?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
      // console.log(_restaurants)
      setAllRestaurants(_restaurants??[])
      setfilteredrestaurants(_restaurants??[])
      console.log(_restaurants)

    })
    .catch(error => {
      console.error('Error fetching data:', error);
    });
  }

  
  useEffect(() => { 
    //Api call
    // getRestaurants(); 
    _getRestaurants();
   
  }, []);


  

  //not render component (early return)
  if (!allRestaurants) return null;


  
  return  allRestaurants?.length === 0 ? <Shimmer/> : (
    <>
      <div className="p-5 bg-pink-50 m-2" >
        <input
          className="focus:bg-green-200 p-2 m-2"
          type="text"
          placeholder="search"
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
        />

        <button
          className="p-2 m-2 bg-green-900  hover:bg-black text-white  rounded-md "
          onClick={() => {
            //need to filter the data
            const data = filterData(searchText, allRestaurants);
            //update the state-restaurants
            setfilteredrestaurants(data);
          }}
        >
          Search{" "}
        </button>
        
      </div>

      <div className="flex flex-wrap">
        {filteredrestaurants.map((restaurant) => {
          return (
            
            <Link to={"/restaurant/" + restaurant?.info?.id}  key={restaurant?.info?.id} >  

            < RestaurantCard {...restaurant?.info}  />  

            </Link>
          );

        })}
      </div>
    </>
  );
};

export default Body;
