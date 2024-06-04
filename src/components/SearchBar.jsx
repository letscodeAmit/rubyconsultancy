import React from "react";
import { HiOutlineAdjustments } from "react-icons/hi";
import { HiOutlineAdjustmentsHorizontal } from "react-icons/hi2";
import { IoIosSearch } from "react-icons/io";

const SearchBar = () => {
  return (
    <div className="mt-10">
      <div class="relative w-full">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
          <IoIosSearch />
        </div>
        <input
          type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search..."
          required
        />
        <button
          type="button"
          class="absolute inset-y-0 end-0 flex items-center pe-3"
        >
          <HiOutlineAdjustmentsHorizontal />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
