import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ActionTypes from "../Redux/Actions/action-type";
import axios from "axios";
function GetProducts() {
  const dispatch = useDispatch();
  useEffect(() => {
    const getData = async () => {
      dispatch({ type: ActionTypes.LOADING, payload: true });
      const options = {
        headers: {
          method: "GET",
          "content-type": "application/json",
          accept: "application/json",
                },
      };
      await axios
        .get(
          "https://upayments-studycase-api.herokuapp.com/api/products",
          options
        )
        .then((items) => {
          console.log(items);
          dispatch({
            type: ActionTypes.FETCH_PRODUCTS,
            payload: items.data.products,
          });
        });
      dispatch({ type: ActionTypes.LOADING, payload: false });
    };
    getData();
  }, [dispatch]);

  return <div></div>;
}

export default GetProducts;
