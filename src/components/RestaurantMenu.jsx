import { useState, useEffect } from "react";
import React from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useMenuFetch from "../hooks/useMenuFetch";
import RestaurantCategory from "./RestaurantCategory";

const RestuarantMenu = () => {
  const { restId } = useParams();
  const [showIndex, setshowIndex] = useState(0);

  useMenuFetch(restId);
  const restInfo = useMenuFetch(restId);
  if (restInfo === null) return <Shimmer />;
  const {
    name,
    avgRating,
    costForTwoMessage,
    cuisines,
    areaName,
    totalRatingsString,
  } = restInfo?.cards[2]?.card?.card?.info;
  const { deliveryTime, minDeliveryTime, maxDeliveryTime } =
    restInfo?.cards[2]?.card?.card?.info?.sla;

  const categories =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="flex flex-col mx-50">
      <div className="glow-border flex  justify-around items-center bg-slate-900/10 p-10  mb-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
        <h1 className="text-4xl font-fasi text-(--lapis-lazuli)">{name}</h1>
        <div>
          <p className="font-cali text-slate-900/90">
            {avgRating} ({totalRatingsString}) •{" "}
            <span className=" text-lg text-slate-900">{costForTwoMessage}</span>
          </p>
          <p className="font-cali text-slate-900/90">{cuisines.join(", ")}</p>
          <p className="font-cali text-slate-900/90">Outlet {areaName}</p>
          <p className="font-cali text-slate-900/90">
            {minDeliveryTime} - {maxDeliveryTime} mins
          </p>
          <p className="font-cali text-slate-900/90">
            Free Delivery on orders above ₹99
          </p>
        </div>
      </div>
      <div className="">
        {categories.map((category, index) => (
          <div key={category.card.card.categoryId} className="">
            <RestaurantCategory
              data={category.card.card}
              showItem={index === showIndex ? true : false}
              setshowIndex={() =>
                setshowIndex(index === showIndex ? null : index)
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestuarantMenu;
