import React from "react";
import { MENU_URL } from "../utils/constants";
import { TbShoppingCartCopy } from "react-icons/tb";
import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";
const MenuCard = ({ items }) => {
  const dispatch = useDispatch();
  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };
  return (
    <div className="flex flex-wrap gap-5 justify-center mt-15">
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className=" mb-10 transition-transform duration-300 hover:-translate-y-2 "
        >
          <div className="flex flex-col">
            <div className="relative flex mt-10">
              <div className="absolute -top-20 left-8">
                {item?.card?.info?.imageId ? (
                  <img
                    src={MENU_URL + item?.card?.info?.imageId}
                    alt=""
                    className="w-43 h-43 object-cover rounded-full"
                  />
                ) : (
                  <div className="bg-gray-800 w-43 h-43 rounded-full"></div>
                )}
              </div>

              <div className="absolute -top-13 left-42 text-white bg-black p-2 rounded-t-xl rounded-bl-lg rounded-br-4xl">
                <TbShoppingCartCopy
                  size={22}
                  onClick={() => handleAddItem(item)}
                />
              </div>
            </div>
            <div className="bg-slate-900/20  rounded-3xl pt-15 h-55 w-60 px-4  flex flex-col  justify-center items-center border-3 border-slate-300 hover:shadow-lg">
              <p className="text-xl font-fasi text-(--lapis-lazuli) ">
                {item?.card?.info?.name?.length > 12
                  ? item?.card?.info?.name.substring(0, 12)
                  : item?.card?.info?.name}
              </p>
              <p className="font-fasi text-lg pt-1 ">
                ₹
                {(item?.card?.info?.price || item?.card?.info?.defaultPrice) /
                  100}
              </p>
              <p className="font-fasi pt-1 text-(--verdigris)">
                ★{items?.card?.info?.ratings?.aggregatedRatingrating}(
                {items?.card?.info?.ratings?.aggregatedRatingratingCountV2})
              </p>
              {/* <p className="menu-des">
            {description.length > 30
              ? description.substring(0, 30) + "......more"
              : description}
          </p> */}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default MenuCard;
