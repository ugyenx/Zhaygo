import React from "react";
import { CiCircleChevUp } from "react-icons/ci";
import { CiCircleChevDown } from "react-icons/ci";
import { useState } from "react";
import MenuCard from "./MenuCard";
const RestaurantCategory = ({ data }) => {
  const [showItem, setshowItem] = useState(false);
  const handleClick = () => {
    setshowItem(!showItem);
  };
  return (
    <div className="">
      <div
        className="flex w-full justify-between px-10 mb-20 cursor-pointer"
        onClick={handleClick}
      >
        <div>
          <span>
            {data.title} ({data.itemCards.length})
          </span>
        </div>
        <CiCircleChevDown />
      </div>
      {showItem && <MenuCard items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
