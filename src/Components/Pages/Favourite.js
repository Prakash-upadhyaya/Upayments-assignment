import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ActionTypes from "../../Redux/Actions/action-type";

function Favourite() {
  const favItems = useSelector((state) => state.reducer.fav);
  const dispatch = useDispatch();

  useEffect(() => {
    localStorage.setItem("FAV", JSON.stringify(favItems));
  }, [favItems]);

  return (
    <>
      <div>
        {favItems.length > 0 ? (
          <div className="grid grid-cols-4 gap-4 ">
            {favItems.map((item) => {
              return (
                <>
                  <div className="max-w-sm rounded overflow-hidden shadow-lg ml-10 mt-5">
                    <img
                      className="object-cover h-48 w-96"
                      src={item.avatar}
                      alt="..."
                    />
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">{item.name}</div>
                      <div className="font-bold text-xl mb-2">
                        Rs {item.price}
                      </div>
                      <button
                        className="bg-transparent hover:bg-red-500 text-red-500 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
                        onClick={() =>
                          dispatch({
                            type: ActionTypes.REMOVE_FROM_FAV,
                            payload: item._id,
                          })
                        }
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </>
              );
            })}
          </div>
        ) : (
          <>
            <h1 class="text-center mt-20 text-2xl ">
              No Item present in Favourites
            </h1>
          </>
        )}
      </div>
    </>
  );
}

export default Favourite;
