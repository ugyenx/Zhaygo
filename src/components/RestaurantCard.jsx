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
    <div className="bg-(--tea-green) flex   flex-col mb-10 flex-wrap w-70 h-70 border border-(--light-green) rounded-xl transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
      <div className="w-70 pr-0.5">
        <img
          src={CDN_URL + cloudinaryImageId}
          alt=""
          className="w-full h-40 object-cover rounded-t-xl "
        />
      </div>
      <div className="px-6 py-3 flex  flex-col gap-0.5">
        <h3 className="text-(--lapis-lazuli) font-bold tracking-wider">
          {name.length > 15 ? name.substring(0, 15) + "..." : name}
        </h3>
        <h6 className="text-sm text-(--verdigris) tracking-wide">
          {cuisines.join(" ").length > 25
            ? cuisines.join(" ").substring(0, 25) + "..."
            : cuisines.join(" ")}
        </h6>
        <h4 className="text-sm text-(--verdigris) font-bold">{costForTwo}</h4>
        <h4 className="text-sm font-bold text-(--emerald)">{avgRating} ⭐</h4>
        {/* <h5 className="delivery-time">{deliveryTime} minutes</h5> */}
      </div>
    </div>
  );
};
export default RestaurantCard;
