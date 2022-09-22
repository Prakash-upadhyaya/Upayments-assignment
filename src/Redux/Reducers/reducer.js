import ActionTypes from "../Actions/action-type";

function getFav() {
  const favItem = localStorage.getItem("FAV");
  if (favItem) {
    return JSON.parse(favItem);
  } else {
    return [];
  }
}

const initialState = {
  loading: false,
  products: [],
  fav: getFav(),
  sortBy: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.FETCH_PRODUCTS:
      return { ...state, products: action.payload };

    case ActionTypes.FAV_PRODUCTS:
      return { ...state, fav: [...state.fav, action.payload] };

    case ActionTypes.REMOVE_FROM_FAV:
      return {
        ...state,
        fav: [...state.fav.filter((i) => i._id !== action.payload)],
      };

    case ActionTypes.LOADING:
      return { ...state, loading: action.payload };

    case ActionTypes.FILTER:
      return { ...state, sortBy: action.payload };

    default:
      return state;
  }
}

export default reducer;
