import React from "react";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import useFectchResto from "../hooks/useFectchResto";
const Restaurant = () => {
  const [searchText, setsearchText] = useState("");
  const PromotedRestCard = withPromotedLabel(RestaurantCard);
  const restObject = useFectchResto();
  const restaurants =
    restObject?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
      ?.restaurants || [];
  const listOfrest = restaurants;
  const dislistOfrest = restaurants;
  //   useEffect(() => {
  //     const filteredlistOfRest = listOfrest.filter((res) =>
  //       res.info.name.toLowerCase().includes(searchText.toLowerCase())
  //     );
  //     dislistOfrest = filteredlistOfRest;
  //   }, [searchText, listOfrest]);

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) return <h1>Sorry, you are offline brother</h1>;
  return listOfrest.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-com">
      <div className="search-items">
        <input
          type="text"
          className="search"
          value={searchText}
          onChange={(e) => {
            setsearchText(e.target.value);
          }}
        />
        {/* <button
          className="search-btn"
          onClick={() => {
            // console.log(searchText);
            const filteredlistOfRest = listOfrest.filter((res) =>
              res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );
            setdislistOfrest(filteredlistOfRest);
          }}
        >
          Seacrh
        </button> */}
        {/* <button
          className="filter"
          onClick={() => {
            const filteredList = listOfrest.filter(
              (rest) => rest.info.avgRating > 4
            );
            setlistOfrest(filteredList);
          }}
        >
          {" "}
          Restaurant Filter
        </button> */}
      </div>
      <div className="flex flex-wrap gap-6">
        {dislistOfrest.map((restaurant) => (
          <Link
            // className="body-link"
            key={restaurant.info.id}
            to={"/restaurant/" + restaurant.info.id}
          >
            {" "}
            {restaurant.info.isOpen ? (
              <PromotedRestCard restData={restaurant} />
            ) : (
              <RestaurantCard restData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};
export default Restaurant;
