export const filterReducer = (state, action) => {
  switch (action.type) {
    case "productSearch": {
      return {
        ...state,
        searchedText: action.payload,
      };
    }

    case "filterByPrice": {
      return {
        ...state,
        price: action.payload,
      };
    }

    case "filterByRating": {
      return {
        ...state,
        rating: action.payload,
      };
    }

    case "filterBySort": {
      return {
        ...state,
        sort: action.payload,
      };
    }

    case "checkBoxValue": {
      return {
        ...state,
        checkBoxValues: action.payload.target.checked
          ? [...state.checkBoxValues, action.payload.target.value]
          : state.checkBoxValues.filter(
              (cbv) => cbv !== action.payload.target.value
            ),
      };
    }

    case "setSingleCategory": {
      return {
        ...state,
        checkBoxValues: [...state.checkBoxValues, action.payload],
      };
    }

    case "clearFilter": {
      return {
        ...state,
        price: "500",
        searchedText: "",
        rating: "",
        sort: "",
        checkBoxValues: [],
      };
    }

    default:
      return state;
  }
};
