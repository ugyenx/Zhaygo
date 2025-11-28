import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import MenuCard from "../components/MenuCard";
const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="flex flex-col">
      <h1>Carty</h1>
      <MenuCard items={cartItem} />
      {cartItem.length === 0 ? (
        <h1>Add items to your cart</h1>
      ) : (
        <button
          className="bg-black text-white rounded-lg mx-100"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      )}
    </div>
  );
};

export default Cart;
