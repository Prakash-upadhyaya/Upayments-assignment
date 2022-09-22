import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
function Details() {
  const { id } = useParams();
  const [deatils, setDeatils] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const options = {
        headers: {
          method: "GET",
          "content-type": "application/json",
          accept: "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImlhbXByYWthc2hibDk3QGdtYWlsLmNvbSIsImdpdGh1YiI6Imh0dHBzOi8vZ2l0aHViLmNvbS9wLWdpdGh1Yi0xMTEiLCJpYXQiOjE2NjMyNDUxMDgsImV4cCI6MTY2MzY3NzEwOH0.S4ktjSetH_LPysveGZgJICLKA9O0g7Gi5mRN92j-QCA",
        },
      };
      axios
        .get(
          `https://upayments-studycase-api.herokuapp.com/api/products/${id}`,
          options
        )
        .then((prod) => {
          //   console.log(prod);
          setDeatils(prod.data.product);
        });
    };
    getData();
  }, [id]);

  return (
    <>
      <div className="grid grid-cols-2 gap-6 m-5">
        <div className="col-span-2 ">
          <div className="max-w-sm w-full lg:max-w-full lg:flex">
            <img
              src={deatils.avatar}
              className="object-cover h-48 w-96"
              alt="..."
            />
            <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-8">
                <p className="text-sm text-gray-600 flex items-center">
                  Product Deatils
                </p>
                <div className="text-gray-900 font-bold text-xl mb-2">
                  {deatils.name}
                </div>
                <p className="text-gray-700 text-base">{deatils.description}</p>
              </div>
              <div className="flex items-center">
                <div className="text-sm">
                  <p className="text-gray-900 text-xl font-semibold  leading-none pb-5">
                    <span className="font-italic"> Rs</span> {deatils.price}
                  </p>
                  <p>
                    <Link
                      to={"/"}
                      className="bg-transparent hover:bg-green-800 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-700 hover:border-transparent rounded"
                    >
                      Back
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Details;
