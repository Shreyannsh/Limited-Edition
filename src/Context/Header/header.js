import "./header.css";

import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
import { MdExplore } from "react-icons/md";
import { IoPersonCircleSharp } from "react-icons/io5";

import { useContext } from "react";

import { filterContext } from "../../Contexts/FilterContext";
import { authContext } from "../../Contexts/AuthContext";

export default function Header() {
  const { dispatch, state } = useContext(filterContext);
  const { isLoggedIn } = useContext(authContext);

  return (
    <div>
      <nav className="navBar">
        <NavLink className="nav-logo" to="/">
          LIMITED EDITION
        </NavLink>
        <input
          onChange={(e) =>
            dispatch({ type: "productSearch", payload: e.target.value })
          }
          className="searchBar"
          placeholder="Search here"
          value={state.searchedText}
          type="text"
        />
        <NavLink to="/productList" className="pageOption">
          <MdExplore className="icon" />
          <span>Explore</span>
        </NavLink>
        <NavLink className="pageOption" to="/cart">
          <FaShoppingCart className="icon" /> <span>Cart</span>
        </NavLink>
        <NavLink className="pageOption" to="/wishlist">
          <FaHeart className="icon" /> <span>Wishlist</span>
        </NavLink>
        <NavLink className="pageOption" to={isLoggedIn ? "/profile" : "/login"}>
          <IoPersonCircleSharp className="icon" />
          <span>{isLoggedIn ? "Profile" : "Login"}</span>
        </NavLink>
      </nav>
    </div>
  );
}
