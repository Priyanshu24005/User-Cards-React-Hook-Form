import React from "react";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";

const Form = ({ setUser, setToggle, user, updatedData }) => {
  let {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onChange",
    defaultValues: updatedData,
  });

  let handleClick = (data) => {
    if (updatedData) {
      setUser((prev) => {
        return prev.map((val) => {
          return val.id === updatedData.id ? { ...data } : val;
        });
      });
    } else {
      let arr = [...user, {...data, id:nanoid()}];
      setUser(arr);
      localStorage.setItem("user", JSON.stringify(arr));
    }

    setToggle((prev) => !prev);

    reset();
  };

  return (
    <div className="min-h-[85vh] flex justify-center items-center bg-gray-100">
      <div className="bg-white w-105 rounded-2xl shadow-xl p-8">
        <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Create User
        </h1>

        <form className="flex flex-col gap-4">
          <div>
            <input
              {...register("name", {
                required: {
                  value: true,
                  message: "Enter your Name",
                },
              })}
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          <div>
            <input
              {...register("email", {
                required: {
                  value: true,
                  message: "Enter your Email",
                },
              })}
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register("contact", {
                required: {
                  value: true,
                  message: "Enter your Contact number",
                },
                maxLength: {
                  value: 10,
                  message: "Maximum 10 numbers required",
                },
                minLength: {
                  value: 10,
                  message: "Minimum 10 numbers required",
                },
              })}
              type="number"
              placeholder="Contact Number"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
            />
            {errors.contact && (
              <p className="text-red-500 text-sm mt-1">
                {errors.contact.message}
              </p>
            )}
          </div>

          <div>
            <input
              {...register("image", {
                required: {
                  value: true,
                  message: "Enter Image URL",
                },
              })}
              type="url"
              placeholder="Image URL"
              className="w-full border border-gray-300 rounded-lg p-3 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition"
            />
            {errors.image && (
              <p className="text-red-500 text-sm mt-1">
                {errors.image.message}
              </p>
            )}
          </div>

          <button
            className="mt-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer"
            onClick={handleSubmit(handleClick)}
          >
            Create User
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
