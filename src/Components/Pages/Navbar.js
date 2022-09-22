import React from "react";
import { useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { home } from "react-icons-kit/icomoon/home";
import { heart } from "react-icons-kit/ikons/heart";
import { plus } from "react-icons-kit/ikons/plus";
function Navbar() {
  const fav = useSelector((state) => state.reducer.fav);
  return (
    <>
      <nav className="px-2 bg-white border-gray-200 dark:bg-gray-600 dark:border-gray-200">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
          <Link
            to={"/"}
            className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
          >
            E-SHOP
          </Link>

          <div className="hidden w-full md:block md:w-auto">
            <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-900 md:dark:bg-gray-600 dark:border-gray-700">
              <li className="nav-item">
                <Link
                  to={"/"}
                  className="block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent"
                >
                  <Icon icon={home} size={20}></Icon>{" "}
                  <span className="pl-1">Home</span>
                </Link>
              </li>
              <li className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent">
                <Link to={"/fav"}>
                  <Icon icon={heart} size={20}></Icon>
                  <span className="pl-1">Favourite</span>{" "}
                  <span className="bg-white p-2 text-black rounded-full">
                    {fav.length}
                  </span>
                </Link>
              </li>
              <li className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-white dark:bg-blue-600 md:dark:bg-transparent">
                <Link to={"/add"}>
                  <Icon icon={plus} size={20}></Icon>
                  <span className="pl-1">Add</span>{" "}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Outlet />
    </>
  );
}

export default Navbar;
