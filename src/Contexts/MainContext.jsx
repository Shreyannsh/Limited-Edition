import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const mainContext = createContext();

export default function UniqueProvider({ children }) {
  const [allProductList, setAllProductList] = useState([]);

  const [isLoading, setIsLoading] = useState();

  const fetchData = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("/api/products");
      const { products } = await response.json();
      setAllProductList(products);
      setIsLoading(false);
    } catch (error) {
      toast.error("Error from Server");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <mainContext.Provider
        value={{ fetchData, allProductList, setAllProductList, isLoading }}
      >
        {children}
      </mainContext.Provider>
    </div>
  );
}
