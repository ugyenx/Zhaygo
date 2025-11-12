import React from "react";
import { CiCircleChevUp } from "react-icons/ci";
import { CiCircleChevDown } from "react-icons/ci";
import { useState } from "react";
import MenuCard from "./MenuCard";
const RestaurantCategory = ({ data, showItem, setshowIndex }) => {
  const handleClick = () => {
    setshowIndex();
  };
  return (
    <div className=" mt-5 rounded-2xl border-3 border-slate-300">
      <div
        className="flex w-full justify-between px-10  py-3 cursor-pointer bg-slate-900/20 rounded-xl"
        onClick={handleClick}
      >
        <div>
          <span>
            {data.title} ({data.itemCards.length})
          </span>
        </div>
        <div className="text-blue-400 ">
          {showItem ? (
            <CiCircleChevUp size={24} />
          ) : (
            <CiCircleChevDown size={24} />
          )}
        </div>
      </div>
      {showItem && <MenuCard items={data.itemCards} />}
    </div>
  );
};

export default RestaurantCategory;
