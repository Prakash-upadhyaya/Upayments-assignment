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
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InByYWthc2h1cGFkaHlheWFibEBnbWFpbC5jb20iLCJnaXRodWIiOiJodHRwczovL2dpdGh1Yi5jb20vUHJha2FzaC11cGFkaHlheWEiLCJpYXQiOjE2NjMzNDUyMDYsImV4cCI6MTY2Mzc3NzIwNn0.Yf4CKfaaVOAM3nCU1msxVnNf80y16MDgPx9cri2MXb0",
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
