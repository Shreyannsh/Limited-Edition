import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { cartContext } from "../../Contexts/CartContext";

import "./Cart.css";
import { FaHeart, FaStar } from "react-icons/fa";
import { toast } from "react-toastify";

const restriction = () => {
  toast.error("Cart is Empty");
};

export default function Cart() {
  const {
    state,
    deleteFromCart,
    incrementQuantity,
    decrementQuantity,
    totalCartCount,
    isLoading,
  } = useContext(cartContext);

  return (
    <div className="cartFullPage">
      <h1 className="cartHeading">
        My Cart ({totalCartCount?.quantity ? totalCartCount?.quantity : 0})
      </h1>
      <div className="cartPage">
        {isLoading && (
          <div className="loadingImage">
            <img
              src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif"
              alt="loading"
            />{" "}
          </div>
        )}
        <div className="cartItemList">
          {state?.initialCart?.length > 0 ? (
            state?.initialCart &&
            state?.initialCart?.map((item) => (
              <div className="cartItem" key={item._id}>
                <span className="cartAddToFav">
                  <FaHeart style={{ color: "grey" }} />{" "}
                </span>
                <img src={item.image} alt="" />
                <span className="cartRating">
                  {item.rating}{" "}
                  <FaStar style={{ color: " rgb(255, 251, 0)" }} />
                </span>
                <p className="cartBrandName">{item.brand}</p>
                <p className="cartProductName">{item.name} </p>
                <p className="cartProductPrice">
                  {" "}
                  <span>&#x20B9;</span>
                  {item.price}
                </p>
                <span className="quantity-heading">Quantity</span>
                <button
                  onClick={() => decrementQuantity(item._id)}
                  disabled={item.qty <= 1}
                  className="cartButtonDecrement"
                >
                  -
                </button>{" "}
                <span className="quantity"> {item.qty}</span>
                <button
                  className="cartButtonIncrement"
                  onClick={() => incrementQuantity(item._id)}
                >
                  +
                </button>
                <button
                  className="cartButtonRemove"
                  onClick={() => deleteFromCart(item._id)}
                >
                  {" "}
                  Remove from Cart
                </button>
              </div>
            ))
          ) : (
            <h1 className="emptyCart">Cart is Empty!</h1>
          )}
        </div>
        <div>
          <div className="priceDetails">
            <h2>PRICE DETAILS</h2>
            <p>
              Price({totalCartCount?.quantity}){" "}
              <span>&#x20B9;{totalCartCount?.totalAmount}</span>
            </p>
            <p>
              Discount: <span>&#x20B9;0</span>
            </p>
            <p>
              Delivery Charges{" "}
              <span>&#x20B9;{state.initialCart.length > 0 ? 250 : "0"}</span>
            </p>
            <p style={{ fontSize: "20px" }}>
              <b>Total Amount </b>{" "}
              <b>
                <span>
                  &#x20B9;
                  {state.initialCart.length
                    ? totalCartCount?.totalAmount + 250
                    : 0}
                </span>{" "}
              </b>{" "}
            </p>
            {state?.initialCart?.length > 0 ? (
              <NavLink
                className="checkoutLink"
                to={state?.initialCart.length > 0 ? "/checkout" : "/barrier"}
              >
                Checkout
              </NavLink>
            ) : (
              <NavLink className="checkoutLink" onClick={() => restriction()}>
                Checkout
              </NavLink>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
