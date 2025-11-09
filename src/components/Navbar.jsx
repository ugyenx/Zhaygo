import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../hooks/useOnlineStatus";
const Navbar = () => {
  const [btnName, setbtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();
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
        <div className="text-(--verdigris) pr-2 transition-transform  duration-300 hover:-translate-y-2 hover:shadow-lg">
          <FiShoppingCart size={22} />
        </div>
        <button
          className="font-bold border-2 border-(--light-green) px-4 py-1 rounded-lg transition-transform  duration-300 hover:-translate-y-2 hover:shadow-lg"
          onClick={() => {
            btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
          }}
        >
          {btnName}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
