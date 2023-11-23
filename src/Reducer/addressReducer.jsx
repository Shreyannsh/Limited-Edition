export const addressReducer = (addState, action) => {
  switch (action.type) {
    case "addAddress":
      return { ...addState, ...action.payload };

    case "name":
      return { ...addState, name: action.payload.target.value };

    case "houseNumber":
      return { ...addState, houseNumber: action.payload.target.value };

    case "city":
      return { ...addState, city: action.payload.target.value };

    case "state":
      return { ...addState, state: action.payload.target.value };

    case "country":
      return { ...addState, country: action.payload.target.value };

    case "pincode":
      return { ...addState, pincode: action.payload.target.value };

    case "contactNumber":
      return {
        ...addState,
        contactNumber: action.payload.target.value,
        _id: "1",
      };

    case "dummyAddress":
      return {
        ...addState,
        name: "Shreyansh Tiwari",
        houseNumber: "L143",
        city: "New Delhi",
        state: "New Delhi",
        country: "India",
        pincode: "110072",
        contactNumber: "011-333558811",
      };

    case "reset": {
      return {
        ...addState,
        name: "",
        houseNumber: "",
        city: "",
        state: "",
        country: "",
        pincode: "",
        contactNumber: " ",
      };
    }

    default:
      return addState;
  }
};
