import { useState } from "react";
import authService from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../store/authSlice";
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
    <div className="flex items-center justify-center min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8">
      <div className="w-full max-w-md p-6 space-y-6 bg-white rounded-lg shadow-lg md:p-8">
        <div className="flex justify-center mb-4">
          <span className="w-full max-w-[100px]">
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
            className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-150 ease-in-out"
          >
            Create Account
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
