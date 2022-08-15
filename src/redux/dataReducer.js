import { toys, Campaign } from "../data";

const SHOW_SEARCH_INPUT = "SHOW_SEARCH_INPUT";
const ADD_PRODUCT_TO_CART = "ADD_PRODUCT_TO_CART";
const SEARCH_RESULT = "SEARCH_RESULT";
const RELOAD = "RELOAD";
const TOYSONDETAILS = "TOYSONDETAILS";
const BACKDROP = "BACKDROP";
const ORDER_LOWER_PRICE = "ORDER_LOWER_PRICE";
const ORDER_TOP_PRICE = "ORDER_TOP_PRICE";
const RECHANGE = "RECHANGE";

const dataInitial = {
  toys: toys,
  rechange: false,
  campaign: Campaign,
  showSearchInput: false,
  cart: [],
  searchResult: [],
  keywords: "",
  detailsToys: {},
  backdrop: false,
};

export default function dataReducer(state = dataInitial, action) {
  switch (action.type) {
    case SHOW_SEARCH_INPUT:
      return { ...state, showSearchInput: action.payload };

    case ADD_PRODUCT_TO_CART:
      return { ...state, cart: [...state.cart, action.payload] };

    case RELOAD:
      return { ...state, toys: toys };

    case SEARCH_RESULT:
      const arrayToys = state.toys;
      const filterToys = arrayToys.filter((toys) => {
        return toys.name.toLowerCase().includes(action.payload);
      });
      return { ...state, toys: filterToys, keywords: action.payload };

    case TOYSONDETAILS:
      return { ...state, detailsToys: action.payload };

    case BACKDROP:
      return { ...state, backdrop: action.payload };

    case ORDER_LOWER_PRICE:
      return { ...state, toys: action.payload };

    case ORDER_TOP_PRICE:
      return { ...state, toys: action.payload };

    case RECHANGE:
      return { ...state, rechange: !state.rechange };

    default:
      return state;
  }
}

export const showSearchInput = (option) => async (dispatch) => {
  dispatch({
    type: SHOW_SEARCH_INPUT,
    payload: option,
  });
};
export const addProductToCartReducer = (data) => async (dispatch) => {
  dispatch({
    type: ADD_PRODUCT_TO_CART,
    payload: data,
  });
};

export const searchResultados = (keywords) => async (dispatch) => {
  try {
    const key = keywords.toLowerCase();
    dispatch({ type: RELOAD });
    dispatch({
      type: SEARCH_RESULT,
      payload: key,
    });
  } catch (error) {
    console.log(error);
  }
};
export const detailsToysReducer = (data) => async (dispatch) => {
  try {
    dispatch({
      type: TOYSONDETAILS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};

export const backdropReducer = (show) => async (dispatch) => {
  try {
    dispatch({
      type: BACKDROP,
      payload: show,
    });
  } catch (error) {
    console.log(error);
  }
};

export const orderLowerPriceReducer = () => async (dispatch) => {
  const data = dataInitial.toys.sort((a, b) => {
    return a.price - b.price;
  });

  try {
    dispatch({
      type: ORDER_LOWER_PRICE,
      payload: data,
    });
    dispatch({ type: RECHANGE });
  } catch (error) {
    console.log(error);
  }
};
export const orderTopPriceReducer = () => async (dispatch) => {
  const data = dataInitial.toys.sort((a, b) => {
    return a.price + b.price;
  });

  dispatch({
    type: ORDER_TOP_PRICE,
    payload: data,
  });
  dispatch({ type: RECHANGE });
};
