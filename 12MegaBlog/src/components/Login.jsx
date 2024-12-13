import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import { useDispatch } from "react-redux";
import authService from "../appwrite/auth";
import { useForm } from "react-hook-form";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();
  const [error, setError] = useState("");

  const login = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) dispatch(authLogin(userData));
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg space-y-6 md:space-y-8 lg:space-y-10">
        <div className="flex justify-center mb-6">
          <span className="w-full max-w-[150px] md:max-w-[200px]">
            <Logo width="100%" />
          </span>
        </div>
        <h2 className="text-2xl font-semibold text-center text-gray-900 lg:text-3xl">
          Sign in to your account
        </h2>
        <p className="text-center text-gray-600 lg:text-lg">
          Don&apos;t have an account?&nbsp;
          <Link
            to="/signup"
            className="text-blue-500 hover:text-blue-700 transition duration-150 ease-in-out"
          >
            Sign Up
          </Link>
        </p>
        {error && <p className="text-center text-red-600 mt-4">{error}</p>}
        <form onSubmit={handleSubmit(login)} className="space-y-5 lg:space-y-6">
          <Input
            label="Email"
            placeholder="Enter your email"
            type="email"
            className="text-black placeholder-gray-600 focus:placeholder-gray-800"
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
            className="text-black placeholder-gray-600 focus:placeholder-gray-800"
            {...register("password", {
              required: true,
            })}
          />
          <Button
            type="submit"
            className="w-full py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-150 ease-in-out"
          >
            Sign in
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Login;
