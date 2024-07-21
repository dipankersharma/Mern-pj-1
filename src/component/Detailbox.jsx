import React from "react";

const Detailbox = ({ employee }) => {
  return (
    <div className="  mt-5">
      <div className=" h-[8vh] bg-[#183642] rounded-lg text-zinc-400 flex px-10 items-center justify-between">
        <h3 className="text-sm text-semibold ">Employees</h3>
        <h3 className=" text-sm text-semibold ">Title</h3>
        <h3 className="text-sm text-semibold mr-[5%] ">Role</h3>
      </div>

      {employee.map((item, index) => (
        <div
          key={index}
          className="employedetal w-full h-[10vh] bg-[#172F3C] rounded-lg text-zinc-100 px-10 flex items-center justify-between "
        >
          <div className="  ">
            <h3 className="text-lg">{item.name}</h3>
            <h5 className="text-sm">{item.email}</h5>
          </div>
          <div className="  ">
            <h3 className="text-lg">{item.title}</h3>
            <h5 className="text-sm">{item.department} </h5>
          </div>
          <div className=" ">
            <h3 className="text-lg">{item.role}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Detailbox;
