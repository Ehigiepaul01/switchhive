import React from "react";
import search from "../assets/icons/search-normal.svg";
import arrow from "../assets/icons/arrow-down.svg";
import filter from "../assets/icons/filter.svg";
import hamburger from "../assets/icons/menu.svg";

const Filter = () => {
  return (
    <div className="filter">
      <div className="filter-container flex items-center bg-white p-4 shadow-md">
        <div className="relative w-[43.4%] min-w-52">
          <input
            type="text"
            className="px-3 py-3.5 w-full bg-white rounded-lg border border-zinc-400 pl-[38px] placeholder:text-zinc-400 text-base font-light focus:outline-none"
            placeholder="Search"
          />
          <img src={search} alt="" className="absolute inset-0 my-auto pl-3" />
        </div>

        <button className="fil bg-white text-blue-500 border border-blue-500 p-2 rounded cursor-pointer">
          <div className="relative w-[43.4%] min-w-52">
            <p className="text-blue-500">
              <span>
                {" "}
                <img
                  src={arrow}
                  alt=""
                  className="absolute inset-0 my-auto pl-3"
                />
              </span>
              Select All{" "}
            </p>
          </div>
        </button>

        <button className="fil bg-white text-blue-500 border border-blue-500 p-2 rounded cursor-pointer">
          <div className="relative w-[43.4%] min-w-52">
            <p className="text-blue-500">
              <span>
                {" "}
                <img
                  src={arrow}
                  alt=""
                  className="absolute inset-0 my-auto pl-3"
                />
              </span>
              Add Commission{" "}
            </p>
          </div>
        </button>

        <button className="fil bg-white text-blue-500 border border-blue-500 p-2 rounded cursor-pointer">
          <div className="relative w-[43.4%] min-w-52">
            <p className="text-blue-500">
              <span>
                {" "}
                <img
                  src={filter}
                  alt=""
                  className="absolute inset-0 my-auto pl-3"
                />
              </span>
              Filter by Country{" "}
            </p>
          </div>
        </button>

        <span className="hamburger bg-gray-200 p-1 cursor-pointer rounded">
          {" "}
          <img src={hamburger} alt="" className="absolute inset-0 my-auto pl-3" />
        </span>
      </div>
    </div>
  );
};

export default Filter;
