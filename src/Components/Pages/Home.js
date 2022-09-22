import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ActionTypes from "../../Redux/Actions/action-type";
import { useNavigate } from "react-router-dom";
import Loading from "./Loading";

function Home() {
  const state = useSelector((state) => state.reducer);
  const dispatch = useDispatch();
  const history = useNavigate();

  function handleView(items) {
    history(`/details/${items._id}`);
  }
  // console.log(state.fav);
  useEffect(() => {
    localStorage.setItem("FAV", JSON.stringify(state.fav));
  }, [state.fav]);

  function handleChange(val) {
    dispatch({ type: ActionTypes.FILTER, payload: val });
  }

  let allProducts = state.products;

  if (state.sortBy) {
    allProducts = allProducts.filter((item) => {
      return item.category === state.sortBy;
    });
  }

  function handleClear() {
    dispatch({ type: ActionTypes.FILTER, payload: "" });
  }

  return (
    <>
      {state.loading ? (
        <Loading />
      ) : (
        <div className=" bg-gray-300 ">
          <div className="ml-10">
            <span className="font-semibold">Filter By</span>
            <select
              name="Sort"
              className="rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none m-2 p-2"
              onChange={(e) => handleChange(e.target.value)}
            >
              <option value={""}>All Products</option>
              <option value="Clothing">Clothing</option>
              <option value="Electronics">Electronics</option>
              <option value="Accessories">Accessories</option>
              <option value="Furniture">Furniture</option>
              <option value="Hobby">Hobby</option>
            </select>
            <button
              onClick={handleClear}
              className="bg-transparent m-1 mb-2 ml-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
            >
              Clear
            </button>
          </div>

          <div className="grid grid-cols-4 gap-4 mr-2 ">
            {allProducts.map((item) => {
              return (
                <>
                  <div className="max-w-sm rounded overflow-hidden shadow-lg ml-3 mt-5 bg-gray-100">
                    <img
                      className="object-cover h-48 w-96"
                      src={item.avatar}
                      alt="..."
                    />
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">{item.name}</div>
                    </div>
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">
                        <i>Rs</i> {item.price}
                      </div>
                    </div>

                    <button
                      onClick={() => handleView(item)}
                      className="bg-transparent m-1 mb-2 ml-2 hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                    >
                      View More
                    </button>
                    {state.fav.some((p) => p._id === item._id) ? (
                      <button
                        className="bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
                        onClick={() =>
                          dispatch({
                            type: ActionTypes.REMOVE_FROM_FAV,
                            payload: item._id,
                          })
                        }
                      >
                        Remove from Fav
                      </button>
                    ) : (
                      <button
                        className="bg-transparent hover:bg-green-800 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-700 hover:border-transparent rounded"
                        onClick={() =>
                          dispatch({
                            type: ActionTypes.FAV_PRODUCTS,
                            payload: item,
                          })
                        }
                      >
                        Add to Fav
                      </button>
                    )}
                  </div>
                </>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
