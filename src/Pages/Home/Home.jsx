import "./Home.css";

import { useContext } from "react";
import { Link } from "react-router-dom";

import { filterContext } from "../../Contexts/FilterContext";

export default function Home() {
  const { dispatch } = useContext(filterContext);

  return (
    <div className="home">
      <div className="about">
        <div className="para-1">
          <p>If you are unique</p>
          <p>Why to buy anything</p>
          <p style={{ fontSize: "30px" }}>Presenting </p>
          <p>
            <span
              style={{
                backgroundColor: "black",
                padding: "0px 25px",
                color: "antiquewhite",
                fontSize: "3rem",
              }}
            >
              <i>LIMITED EDITION</i>
            </span>
          </p>

          <p>Exclusively for you</p>
        </div>
        <div>
          <p className="para-2">Make your own Collection</p>
        </div>
        <div>
          <p className="para-3">
            Handpicked best of the best unforgetable priceless unique products
            selected and arranged for your fantesies...
          </p>
        </div>
      </div>
      <div className="category">
        <Link
          to="/productList"
          onClick={() =>
            dispatch({ type: "setSingleCategory", payload: "phones" })
          }
          className="common category-phones"
        >
          Phones
        </Link>
        <Link
          to="/productList"
          onClick={() =>
            dispatch({ type: "setSingleCategory", payload: "laptop" })
          }
          className="common category-laptops"
        >
          Laptops
        </Link>
        <Link
          to="/productList"
          onClick={() =>
            dispatch({ type: "setSingleCategory", payload: "gadgets" })
          }
          className="common category-gadgets "
        >
          Gadgets
        </Link>
        <Link
          to="/productList"
          onClick={() =>
            dispatch({ type: "setSingleCategory", payload: "watches" })
          }
          className="common category-watches"
        >
          Watches
        </Link>
        <Link
          to="/productList"
          onClick={() =>
            dispatch({ type: "setSingleCategory", payload: "prodctList" })
          }
          className="common category-all"
        >
          {" "}
          All Products
        </Link>
        <Link
          to="/productList"
          onClick={() =>
            dispatch({ type: "setSingleCategory", payload: "earbuds" })
          }
          className="common category-earbuds"
        >
          Earbuds
        </Link>
      </div>
    </div>
  );
}
