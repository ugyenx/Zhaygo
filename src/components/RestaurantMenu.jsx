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
    <div className="resto-menu">
      <div className="menu-title">
        <h1 className="resto-name">{name}</h1>
        <div className="resto-details">
          <p>
            {avgRating} ({totalRatingsString}) • {costForTwoMessage}
          </p>
          <p>{cuisines.join(", ")}</p>
          <p>Outlet {areaName}</p>
          <p>
            {minDeliveryTime} - {maxDeliveryTime} mins
          </p>
          <hr className="hr1"></hr>
          <p>Free Delivery on orders above ₹99</p>
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
