import React from "react";
import Detailbox from "./Detailbox";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="w-[80%] m-auto ">
      <div className="detail flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <h4 className="text-2xl font-semibold">Employees</h4>
          <p className="text-sm">
            This is a list of all employees.You can add new employees,update and
            delete existing ones
          </p>
        </div>
        <Link to={"/Addemployee"}>
          {" "}
          <button className="px-3 py-2 rounded-lg bg-[#0077B6] font-semibold text-sm">
            Add Employee
          </button>
        </Link>
      </div>
      <Detailbox />
    </div>
  );
};

export default Home;
