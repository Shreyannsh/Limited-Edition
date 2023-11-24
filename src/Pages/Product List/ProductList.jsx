import "./ProductList.css";

import { useContext, useState } from "react";
import { filterContext } from "../../Contexts/FilterContext";
import Filters from "../../Context/Filters/Filters";
import ItemCard from "../../Context/itemCard/ItemCard";
import { mainContext } from "../../Contexts/MainContext";
import FiltersMain from "../../Context/Filters main/FiltersMain";

export default function ProductList() {
  const { displayProducts } = useContext(filterContext);
  const { isLoading } = useContext(mainContext);
  const [filterOption, setFilterOption] = useState(false);

  const products = displayProducts();

  return (
    <div className="ProductListPage">
      <div className="sideFilter">
        <p
          onClick={() => setFilterOption(!filterOption)}
          className="filterOptionBtn"
        >
          Filters
        </p>

        <Filters show={filterOption} />
      </div>

      <div className="filterSection">
        <FiltersMain />
      </div>
      <div>
        <h1>All product list</h1>
        {isLoading && (
          <div className="loadingImage">
            <img
              src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca_w200.gif"
              alt="loading"
            />{" "}
          </div>
        )}
        <div className="allProducts">
          {products.map((item) => (
            <li key={item._id} className="oneByOne">
              <ItemCard item={item} />
            </li>
          ))}
        </div>
      </div>
    </div>
  );
}
