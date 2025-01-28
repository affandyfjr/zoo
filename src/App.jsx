import React from "react";
import Home1 from "./Pages/Home/Home1";
import Peta from "./Pages/Peta/peta";
import Navbar from "./Component/Navbar/Navbar";
import Footer from "./Pages/Footer/Footer";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="bg-gray-400 sm:bg-red-500 md:bg-red-300 lg:bg-amber-200 xl:bg-green-600">
        <div className="flex justify-center bg-green-300">
          <Navbar />
        </div>
        <div>
          <Routes>
            <Route path="/" element={<Home1 />} />
            <Route path="/peta" element={<Peta />} />
          </Routes>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;
