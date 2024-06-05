import React from "react";
import { HiOutlineAdjustments } from "react-icons/hi";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className="relative flex items-center w-full">
    <IoIosSearch className="absolute left-3 text-gray-500" />
    <input
      type="text"
      placeholder="Search here..."
      className="w-full pl-10 pr-10 p-2 rounded bg-white text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
    <HiOutlineAdjustmentsHorizontal className="absolute right-3 text-gray-500" />
  </div>
  );
};

export default SearchBar;