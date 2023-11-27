import { createContext, useReducer, useContext } from "react";

import { filterReducer } from "../Reducer/filterReducer";
import { mainContext } from "./MainContext";

export const filterContext = createContext();

export default function FilterProvider({ children }) {
  const { allProductList } = useContext(mainContext);

  const initializer = {
    productList: [],
    checkBoxValues: [],
    price: "500",
    searchedText: "",
    rating: "",
    sort: "",
  };

  const [state, dispatch] = useReducer(filterReducer, initializer);

  const displayProducts = () => {
    let products = [...allProductList];

    if (state.checkBoxValues.length > 0) {
      products = [];
      const items = state.checkBoxValues.map((cbValue) =>
        allProductList.filter((item) => item.categoryName === cbValue)
      );
      items.map((array) => {
        return (products = [...products, ...array]);
      });
    }

    if (state.rating.length > 0) {
      products = products.filter(
        (item) => Number(item.rating) >= Number(state.rating)
      );
    }

    if (state.searchedText.length > 0) {
      products = products.filter(
        (item) =>
          item.name.toLowerCase().includes(state.searchedText.toLowerCase()) ||
          item.brand.toLowerCase().includes(state.searchedText.toLowerCase())
      );
    }

    if (state.price > 500) {
      products = products.filter(
        (item) => Number(item.price) <= Number(state.price)
      );
    }

    if (state.sort) {
      if (state.sort === "highToLow") {
        products = products.sort((a, b) => b.price - a.price);
      }
      if (state.sort === "lowToHigh") {
        products = products.sort((a, b) => a.price - b.price);
      }
    }

    return products;
  };

  return (
    <div>
      <filterContext.Provider value={{ state, dispatch, displayProducts }}>
        {children}
      </filterContext.Provider>
    </div>
  );
}
