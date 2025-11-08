import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { restData } = props;
  const {
    name,
    cuisines,
    costForTwo,
    avgRating,
    deliveryTime,
    cloudinaryImageId,
  } = restData?.info;
  return (
    <div className="bg-red-300 flex flex-col mb-10 flex-wrap w-70 h-80">
      <div className="w-70">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt=""
          className="w-full h-40 object-cover "
        />
      </div>
      <div className="restaurant-details">
        <h3 className="name">{name}</h3>
        <h6 className=" cuisines">{cuisines.join(", ")}</h6>
        <h4 className="cost">{costForTwo}</h4>
        <h4 className="rating">{avgRating} ⭐</h4>
        <h5 className="delivery-time">{deliveryTime} minutes</h5>
      </div>
    </div>
  );
};
export default RestaurantCard;
