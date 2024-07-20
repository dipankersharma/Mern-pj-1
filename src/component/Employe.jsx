import React from "react";
import { useForm } from "react-hook-form";

const Employe = () => {
  const { register, handleSubmit, reset } = useForm();

  const createuser = async (data) => {
    const saveUser = await fetch("http://localhost:3000/api/v1/createuser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ...data }),
    });

    console.log("Form resposnse", saveUser);
  };

  return (
    <div className="w-full bg-[#272727]">
      <h1 className="text-4xl font-bold text-center">
        Empower your business with our Employees creation
      </h1>
      <div className="input w-[35%] bg-zinc-700 m-auto mt-10 rounded-lg p-2">
        <h1 className="text-2xl font-bold text-center mt-5">
          Create an Employee
        </h1>
        <hr className="mt-3 mb-3" />
        <form
          className="flex flex-col gap-2"
          action=""
          onSubmit={handleSubmit(createuser)}
        >
          <label className="text-lg font-semibold" htmlFor="">
            Employee Name
          </label>
          <input
            className="p-2 rounded-lg bg-[#272727] text-sm"
            type="text"
            placeholder="Enter employee name"
            {...register("name")}
          />
          <label className="text-lg font-semibold" htmlFor="">
            Employee Email
          </label>
          <input
            type="text"
            placeholder="Enter employee email"
            className="p-2 rounded-lg bg-[#272727] text-sm"
            {...register("email")}
          />
          <label className="text-lg font-semibold" htmlFor="">
            Employee title
          </label>
          <input
            type="text"
            placeholder="Enter employee title"
            className="p-2 rounded-lg bg-[#272727] text-sm"
            {...register("title")}
          />
          <label className="text-lg font-semibold" htmlFor="">
            {" "}
            Employee Department
          </label>
          <input
            type="text"
            placeholder="Enter your Employee department"
            className="p-2 rounded-lg bg-[#272727] text-sm"
            {...register("department")}
          />
          <label className="text-lg font-semibold" htmlFor="">
            Employee Role
          </label>
          <input
            type="text"
            placeholder="Enter your employee role"
            className="p-2 rounded-lg bg-[#272727] text-sm"
            {...register("role")}
          />
          <button
            className="px-3 py-2 rounded-lg bg-[#0077B6] font-semibold text-sm"
            type="submit"
            value="submit"
          >
            Create Employee
          </button>
        </form>
      </div>
    </div>
  );
};

export default Employe;
