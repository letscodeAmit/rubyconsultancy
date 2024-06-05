import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import SideBar from "./SideBar";
import BecomeSeller from "./BecomeSeller";
import CardPage from "./CardPage";
import ImageGallary from "./ImageGallary";
import ImageSlider from "./ImageSlider";

const Dashboard = () => {
  return (
    <div className=" bg-gray-100 h-screen w-full">
      <div className="grid grid-cols-5 grid-rows-6 gap-1">
        <div className="">
          <Logo />
        </div>
        <div className="col-span-3">
          <SearchBar />
        </div>
        <div className="row-span-5 col-start-1 row-start-2">
          <SideBar />
        </div>
        <div className="col-start-5 row-start-1">
          <BecomeSeller />
        </div>
        <div className="row-span-5 col-start-5 row-start-2">
          <ImageGallary />
        </div>
        <div className="col-span-3 row-span-5 col-start-2 row-start-2">
          <CardPage />
          <ImageSlider />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
