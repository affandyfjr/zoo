import React from "react";
import Home from "./Pages/Home/Pertama";
import Navbar from "./Component/Navbar/Navbar";

const App = () => {
  return (
    <div className="">
      <div className="flex justify-center bg-green-300">
        <Navbar />
      </div>
      <div className="">
        <Home />
      </div>
    </div>
  );
};

export default App;
