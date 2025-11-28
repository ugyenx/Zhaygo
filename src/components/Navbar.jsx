import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Navbar = () => {
  const { LoggedInUser } = useContext(UserContext);
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <nav className="flex justify-between pb-10">
      <div className="logo-container">
        <h1 className="text-3xl font-bold tracking-wider">
          ZH<span className="text-(--lapis-lazuli)">AYGO</span>
        </h1>
      </div>
      <div className="flex">
        <ul className="flex gap-2  font-medium tracking-wider">
          {/* <li>Online Status: {onlineStatus ? "✅" : "🔴"}</li> */}
          <li className="glow-border px-4 py-1 transition-transform  duration-300 hover:-translate-y-2">
            <Link to="/" className="linker">
              Home
            </Link>
          </li>
          <li className="glow-border px-4 py-1 transition-transform  duration-300 hover:-translate-y-2">
            <Link to="/restaurant" className="linker">
              Restaurant
            </Link>
          </li>
          <li className="glow-border px-4 py-1 transition-transform  duration-300 hover:-translate-y-2">
            <Link to="/about" className="linker">
              About US
            </Link>
          </li>

          <li className="glow-border px-4 py-1 transition-transform  duration-300 hover:-translate-y-2">
            <Link to="/contact" className="linker">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="flex justify-center items-center gap-3 ">
        <Link to="/cart">
          <div className=" flex  gap-2 text-(--verdigris) pr-2 transition-transform  duration-300 hover:-translate-y-2 hover:shadow-lg">
            <FiShoppingCart size={22} />
            <p>{cartItems.length}</p>
          </div>
        </Link>
        <Link to="/login">
          <button
            className="font-bold border-2 border-(--light-green) px-4 py-1 rounded-lg transition-transform  duration-300 hover:-translate-y-2 hover:shadow-lg"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
        </Link>
        <p>{LoggedInUser}</p>
      </div>
    </nav>
  );
};

export default Navbar;
