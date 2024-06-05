import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";
import { PiShareFat, PiShareFatBold } from "react-icons/pi";

const CardPage = () => {
  return (
    <div>
      <div className="relative flex w-full flex-col bg-white rounded-t-lg bg-clip-border text-gray-700 shadow-lg p-5">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center ">
            <div className="flex-shrink-0">
              <img
                className="w-10 h-10 rounded-md"
                src="https://preview.redd.it/this-is-brad-pitt-59-years-old-v0-rz06qr52b6db1.jpg?width=1080&crop=smart&auto=webp&s=56bcc968b7f9ac3ff83c71d3344926c4cfaab690"
                alt="Neil"
              />
            </div>
            <div className="min-w-0 ms-4">
              <h3 className="text-base font-bold text-gray-900 truncate dark:text-white">
                Lara Leones
              </h3>
              <h3 className="text-base text-gray-500 truncate dark:text-gray-400">
                @thewallart
              </h3>
            </div>
          </div>
          <div>
            <HiDotsVertical />
          </div>
        </div>

        <p className="block font-serif text-base antialiased font-light leading-relaxed text-gray-700 text-start my-4">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout. Read More
        </p>
        <div className="relative  mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-blue-gray-500/40">
          <img
            src="https://images.pexels.com/photos/18715722/pexels-photo-18715722/free-photo-of-lesser-bougainvillea-red-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="ui/ux review check"
          />
          <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
        </div>
      </div>
      <div className="p-6 rounded-b-lg w-full bg-white">
        <div className="flex items-center space-x-4">
          <div className="flex items-center flex-row space-x-2">
            <div>
              <FaRegHeart/>
            </div>
            <div>
              <h4>9.8k</h4>
            </div>
          </div>
          <div className="flex items-center flex-row space-x-2">
            <div>
              <FaRegComment/>
            </div>
            <div>
              <h4>8.6k</h4>
            </div>
          </div>
          <div className="flex items-center flex-row space-x-2">
            <div>
              <PiShareFatBold/>
            </div>
            <div>
              <h4>7.2k</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardPage;
