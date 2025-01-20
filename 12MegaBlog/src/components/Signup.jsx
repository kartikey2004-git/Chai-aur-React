import { useState } from "react";
import authService from "../appwrite/auth.js";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authslice.js";
import { Button, Input, Logo } from "./index.js";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";

function Signup() {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(login(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center">
      <div className="w-full max-w-md p-8 mb-32 bg-white rounded-lg shadow-lg space-y-6 md:space-y-8 lg:space-y-10 ">
        <div className="flex justify-center ">
          <span className="w-full max-w-[150px] md:max-w-[200px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-2xl font-semibold text-center text-black sm:text-3xl">
          Create Your Account
        </h2>
        <p className="text-center">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out"
          >
            Sign In
          </Link>
        </p>
        {error && <p className="text-center text-red-600 mt-4">{error}</p>}
        <form onSubmit={handleSubmit(create)} className="space-y-5">
          <div className="space-y-4">
            <Input
              label="Full Name"
              placeholder="Enter your full name"
              className="text-black"
              {...register("name", { required: true })}
            />
            <Input
              label="Email"
              placeholder="Enter your email"
              type="email"
              className="text-black"
              {...register("email", {
                required: true,
                validate: {
                  matchPattern: (value) =>
                    /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                    "Email address must be a valid address",
                },
              })}
            />
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              className="text-black"
              {...register("password", { required: true })}
            />
          </div>
          <Button
            type="submit"
            className="mt-7 text-white outline-none  border-none border-2 font-semibold  bg-gray-900 rounded-full py-2 w-full text-lg px-8"
          >
            Create Account
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
