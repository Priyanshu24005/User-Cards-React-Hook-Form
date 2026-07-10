import React from "react";

const Navbar = ({ setToggle ,setUpdatedData }) => {
  return (
    <nav className="w-full bg-white shadow-md rounded-xl px-8 py-4 flex justify-between items-center">
      <div className="flex items-center gap-3 flex-wrap">
        <img
          src="https://tse3.mm.bing.net/th/id/OIP.-VxMI71E3LVNRo0BPpW3MwHaHa?r=0&cb=thfvnextfalcon4&rs=1&pid=ImgDetMain&o=7&rm=3"
          alt="Logo"
          className="h-10 w-10 rounded-full object-cover border"
        />

        <h1 className="text-2xl font-bold text-gray-800">
          UserHub
        </h1>
      </div>

      <div className="flex items-center gap-8 text-gray-700 font-medium">
        <p className="cursor-pointer hover:text-blue-600 transition">
          Home
        </p>

        <p className="cursor-pointer hover:text-blue-600 transition">
          About
        </p>

        <p className="cursor-pointer hover:text-blue-600 transition">
          Contact
        </p>
      </div>

      <button
        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
        onClick={() => {setToggle((prev) => !prev);
          setUpdatedData(null);
        }}
      >
        + Create User
      </button>
    </nav>
  );
};

export default Navbar;