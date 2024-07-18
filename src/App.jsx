import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home";
import Employe from "./component/Employe";

// #183642 bar colour
const App = () => {
  return (
    <div className=" w-full min-h-[100vh] bg-[#272727] text-white p-10 overflow-y-hidden">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Addemployee" element={<Employe />} />
      </Routes>
    </div>
  );
};

export default App;
