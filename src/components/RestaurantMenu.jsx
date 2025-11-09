import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import MenuCard from "./MenuCard";
import { useParams } from "react-router-dom";
import { MENU_API } from "../utils/constants";
import useMenuFetch from "../hooks/useMenuFetch";

const RestuarantMenu = () => {
  const { restId } = useParams();
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
  // const { itemCards } =
  //   restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card
  //     ?.card || [];
  const regularCards =
    restInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];

  // Find the card that actually contains itemCards
  const menuCard = regularCards.find((c) => c.card?.card?.itemCards);

  // Get the items safely
  const itemCards = menuCard?.card?.card?.itemCards || [];
  return (
    <div className="flex flex-col mx-50">
      <div className="glow-border flex  justify-around items-center bg-(--tea-green) p-10  mb-8 transition-transform duration-300 hover:-translate-y-2 hover:shadow-lg">
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
      <div className="menu">
        {itemCards.map((items) => (
          <MenuCard key={items.card.info.id} menuInfo={items.card} />
        ))}
      </div>
    </div>
  );
};

export default RestuarantMenu;
