import React from "react";

const Detailbox = () => {
  const data = [
    {
      name: "John Doe",
      email: "john@example.com",
      title: "Software Engineer",
      department: "Computer Science",
      role: "Full Stack Developer",
    },
    {
      name: "John Doe",
      email: "john@example.com",
      title: "Software Engineer",
      department: "Computer Science",
      role: "Full Stack Developer",
    },
  ];

  return (
    <div className="  mt-5">
      <div className=" h-[8vh] bg-[#183642] rounded-lg text-zinc-400 flex items-center">
        <h3 className="text-sm text-semibold ml-5">Employees</h3>
        <h3 className=" text-sm text-semibold ml-[49vh] ">Title</h3>
        <h3 className="text-sm text-semibold ml-[62vh]">Role</h3>
      </div>

      {data.map((item, index) => (
        <div className="employedetal w-full h-[10vh] bg-[#172F3C] rounded-lg text-zinc-100 flex items-center ">
          <div className=" ml-5 w-[30%]">
            <h3 className="text-lg">{item.name}</h3>
            <h5 className="text-sm">{item.email}</h5>
          </div>
          <div className=" ml-[25%] w-[40%]">
            <h3 className="text-lg">{item.title}</h3>
            <h5 className="text-sm">{item.department} </h5>
          </div>
          <div className=" ml-[25%] w-[50%]">
            <h3 className="text-lg">{item.role}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Detailbox;
