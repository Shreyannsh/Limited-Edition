import "./header.css";

import { NavLink } from "react-router-dom";
import { FaShoppingCart, FaHeart } from "react-icons/fa";
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
        <NavLink to="/productList" className="explore">
          Explore
        </NavLink>
        <NavLink className="cart" to="/cart">
          <FaShoppingCart /> <span>Cart</span>
        </NavLink>
        <NavLink className="wishList" to="/wishlist">
          <FaHeart /> <span>Wishlist</span>
        </NavLink>
        <NavLink className="login" to={isLoggedIn ? "/profile" : "/login"}>
          {isLoggedIn ? "Profile" : "Login"}
        </NavLink>
      </nav>
    </div>
  );
}
