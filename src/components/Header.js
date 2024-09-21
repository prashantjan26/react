import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";
import { useState, useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const onlineStatus = useOnlineStatus();
  const [btnReact, setbtnReact] = useState("Login");

  const { loggedInUser } = useContext(UserContext);
  console.log(loggedInUser);

  // Subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between bg-gray-100">
      <div className="logo-container">
        <img className="w-64" src={LOGO_URL} />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4">
            Online Status: {onlineStatus === true ? "🟢" : "🔴"}
          </li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart - ({cartItems.length}items)</Link>
          </li>
          <button
            className="login"
            onClick={() => {
              btnReact === "Login"
                ? setbtnReact("Log out")
                : setbtnReact("Login");
            }}
          >
            {btnReact}
          </button>
          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
