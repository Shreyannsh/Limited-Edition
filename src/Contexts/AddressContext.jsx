import { createContext, useState, useReducer } from "react";
import { v4 as uuid } from "uuid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { addressReducer } from "../Reducer/addressReducer";

export const addressContext = createContext();

export default function AddressProvider({ children }) {
  const initializer = {
    name: "",
    houseNumber: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
    contactNumber: "",
  };

  const [addressList, setAddressList] = useState([
    {
      _id: "1",
      name: "Shreyannsh Tiwari",
      houseNumber: "L 143 Leo Homes",
      city: "New Delhi",
      state: "Delhi",
      country: "India",
      pincode: "110067",
      contactNumber: "011-2345123",
    },
  ]);

  const [selectedAddress_Id, setSelectedAddress_Id] = useState("");

  const [addState, dispatch] = useReducer(addressReducer, initializer);

  const removeAddress = (address) => {
    setAddressList(addressList.filter((add) => add !== address));
    toast("Address Removed!");
  };

  const addAddress = (addressType) => {
    if (addressType === "add") {
      setAddressList([...addressList, { ...addState, _id: uuid() }]);
      dispatch({ type: "reset" });
      toast("Address Added!");
    } else {
      const id = addState._id;
      const newList = addressList.map((address) => {
        if (address._id === id) {
          return { ...address, ...addState };
        } else {
          return address;
        }
      });
      setAddressList(newList);
      toast("Address Updated!");
    }
  };

  return (
    <div>
      <addressContext.Provider
        value={{
          addState,
          dispatch,
          addAddress,
          removeAddress,
          addressList,
          selectedAddress_Id,
          setSelectedAddress_Id,
        }}
      >
        {children}
      </addressContext.Provider>
    </div>
  );
}
