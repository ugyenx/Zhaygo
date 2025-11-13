import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import MenuCard from "../components/MenuCard";
const Cart = () => {
  const cartItem = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Carty</h1>
      <MenuCard items={cartItem} />
    </div>
  );
};

export default Cart;
