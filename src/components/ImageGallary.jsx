import React from "react";
import { info } from "../constant/dummyData";

const ImageGallary = () => {
  return (
    <div className="overflow-y-auto overflow-x-hidden flex-grow h-1/2">
      <div className="border-b border-gray-200 dark:border-neutral-700">
        <nav className="flex space-x-3" aria-label="Tabs" role="tablist">
          <button
            type="button"
            className="text-xl text-stone-400 font-serif font-semibold hover:text-black"
          >
            Artists
          </button>
          <button
            type="button"
            className="text-xl text-stone-400 font-serif font-semibold hover:text-black"
          >
            Photographers
          </button>
        </nav>
      </div>

      {info.map((item) => (
        <div
          key={item.id}
          className="relative bg-custom-bg bg-cover bg-center my-4"
        >
          <div className="absolute bottom-3 left-0 w-full flex flex-row items-center p-2">
            <div className="flex-shrink-0">
              <img
                className="w-10 h-10 rounded-md border-2"
                src={item.userImage}
                alt={item.userImageAlt}
              />
            </div>
            <div className="min-w-0 ms-4">
              <h3 className="text-base font-bold text-white truncate dark:text-white">
                {item.title}
              </h3>
              <h3 className="text-base text-white truncate dark:text-gray-400">
                {item.user}
              </h3>
            </div>
          </div>
          <div className="rounded-xl bg-orange-600">
            <img
              src={item.backGroundImage}
              alt={item.backGroundImageAlt}
              className="rounded-xl"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ImageGallary;
