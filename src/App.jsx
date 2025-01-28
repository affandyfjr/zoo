import React from "react";
import Home1 from "./Pages/Home/Home1";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Pages/Footer/Footer";

const App = () => {
  return (
    <div className=" bg-gray-400 md:bg-red-300 lg:bg-amber-200 xl:bg-green-600 sm:bg-red-500">
      <div className="flex justify-center bg-green-300">
        <Navbar />
      </div>
      <div className="">
        <Home1 />
      </div>

      <div> <Footer /> </div>

    </div>
  );
};

export default App;
