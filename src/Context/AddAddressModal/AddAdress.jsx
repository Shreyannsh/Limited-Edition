import "./AddAddress.css";

import { useContext } from "react";

import { addressContext } from "../../Contexts/AddressContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AddAddress = (props) => {
  const { addAddress, dispatch, addState } = useContext(addressContext);

  if (!props.show) {
    return null;
  }
  console.log(addState);
  const addressValues = Object.values(addState).includes("");
  console.log(addressValues);
  const addressDetails = () => {
    if (!addressValues) {
      if (props.mode === "update") {
        addAddress("update");
      } else {
        addAddress("add");
      }
    } else {
      toast("all fields are mandatory to fill");
    }
  };

  return (
    <div>
      <div className="modal">
        <div className="address">
          <h2 className="heading">
            {props.mode === "update" ? "Update Address" : "Add Address"}
          </h2>
          <div>
            <fieldset>
              <legend>Name</legend>
              <input
                onChange={(e) => dispatch({ type: "name", payload: e })}
                value={addState.name}
                type="text"
                placeholder="Shreyansh Tiwari"
              />
            </fieldset>

            <fieldset>
              <legend>House No.</legend>
              <input
                onChange={(e) => dispatch({ type: "houseNumber", payload: e })}
                value={addState.houseNumber}
                type="text"
                placeholder="L143"
              />
            </fieldset>

            <fieldset>
              <legend>City</legend>
              <input
                onChange={(e) => dispatch({ type: "city", payload: e })}
                value={addState.city}
                type="text"
                placeholder="Mount Abu"
              />
            </fieldset>

            <fieldset>
              <legend>State</legend>
              <input
                onChange={(e) => dispatch({ type: "state", payload: e })}
                value={addState.state}
                type="text"
                placeholder="New Delhi"
              />
            </fieldset>

            <fieldset>
              <legend>Country</legend>
              <input
                onChange={(e) => dispatch({ type: "country", payload: e })}
                value={addState.country}
                type="text"
                placeholder="India"
              />
            </fieldset>

            <fieldset>
              <legend>Pincode</legend>
              <input
                onChange={(e) => dispatch({ type: "pincode", payload: e })}
                value={addState.pincode}
                type="text"
                placeholder="110072"
              />
            </fieldset>

            <fieldset>
              <legend>Contact number</legend>
              <input
                onChange={(e) =>
                  dispatch({ type: "contactNumber", payload: e })
                }
                value={addState.contactNumber}
                type="text"
                placeholder="011-333558811"
              />
            </fieldset>
          </div>

          <div className="address-btns">
            <button onClick={() => addressDetails()}>
              {props.mode === "add" ? "Add Address" : "Update Address"}
            </button>
            <button onClick={props.onClose}>Close</button>
            <button onClick={() => dispatch({ type: "dummyAddress" })}>
              {" "}
              Dummy Address
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
