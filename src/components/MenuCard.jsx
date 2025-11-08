import { MENU_URL } from "../utils/constants";
const MenuCard = (props) => {
  const { menuInfo } = props;
  const { name, price, imageId, description, defaultPrice } = menuInfo?.info;
  const { rating, ratingCountV2 } =
    menuInfo?.info?.ratings?.aggregatedRating || {};
  return (
    <div className="menu-container">
      <div className="menu-card">
        <div className="menu-left">
          <p className="menu-name">{name}</p>
          <p className="menu-price">₹{(price || defaultPrice) / 100}</p>
          <p className="menu-rating">
            ★{rating}({ratingCountV2})
          </p>
          <p className="menu-des">{description}</p>
        </div>
        <div className="menu-right">
          {imageId ? (
            <img src={MENU_URL + imageId} alt="" className="menu-img" />
          ) : (
            <div className="menu-img-placeholder">No Image</div>
          )}

          <button className="add-to-card">ADD</button>
        </div>
      </div>
      <hr className="hr-line"></hr>
    </div>
  );
};
export default MenuCard;
