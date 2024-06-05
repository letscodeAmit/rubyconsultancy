import React from "react";
import Logo from "./components/Logo";
import SearchBar from "./components/SearchBar";
import BecomeSeller from "./components/BecomeSeller";
import SideBar from "./components/SideBar";
import CardPage from "./components/CardPage";
import ImageGallary from "./components/ImageGallary";

const App = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100 h-auto">
      {/* Top Bar */}
      <div className=" text-white flex p-4 gap-4">
        <div className="flex items-center w-1/4 bg-white rounded shadow p-4">
          <Logo />
        </div>
        <div className="flex items-center w-1/2 bg-white rounded shadow p-4">
          <SearchBar />
        </div>
        <div className="flex items-center w-1/4 bg-[#88C2BB] rounded shadow p-4">
          <BecomeSeller />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-1 p-4 gap-4">
        {/* Sidebar */}
        <aside className="bg-white w-1/4 p-4 rounded shadow">
          <SideBar />
        </aside>

        {/* Cards Section */}
        <main className="flex-1 p-4 bg-white rounded shadow">
          <CardPage />
        </main>

        {/* Photo Gallery */}
        <aside className="bg-white w-1/4 p-4 rounded shadow">
          <ImageGallary />
        </aside>
      </div>
    </div>
  );
};

export default App;
