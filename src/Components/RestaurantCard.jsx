import { IMG_CDI } from "../Constant";
const RestaurantCard = ({ name, cuisines, cloudinaryImageId, areaName }) => {
  return (
    <div className="w-[200px] p-5 m-5 shadow-lg bg-pink-50">
      <img src={IMG_CDI + cloudinaryImageId} />
      <h2 className="font-bold text-2xl ">{name}</h2>
      <h3>{cuisines.join(",")}</h3>
      <h4>{areaName}</h4>
    </div>
  );
};
export default RestaurantCard;
