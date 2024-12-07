import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import authService from "../appwrite/auth";
import { login as storeLogin } from "../store/authSlice";
import { Button, Input, Logo } from "./index";
import usersDatabaseService from "../appwrite/usersDatabase";

function Signup() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const signup = async (data) => {
    setIsLoading(true);
    try {
      setError("");
      const session = await authService.createAccount(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(storeLogin(userData));
          // profile create
          const userId= userData.$id;
          const userName= userData.name;
          const email= userData.email;
          const bio="";
          const profileImage="";
          await usersDatabaseService.createUser({userId,userName,bio,profileImage,email})

          ///
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message || "SignUp failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div
        className="sm:mx-auto sm:w-full sm:max-w-sm"
      >
        <div >
        <Logo />
        <h2 class="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-100">Sign up to your account</h2>
        </div>
        
       
      </div>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={handleSubmit(signup)} className="space-y-6">
       
          <Input
            label="Full Name: "
            type="text"
            required
            placeholder="Enter Your Full Name"
            className="block w-full rounded-md px-3 py-1.5 text-base text-gray-200 outline outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            {...register("name", {
              required: "Username is required",
            })}
            error={errors.name?.message}
          />
          <Input
            label="Email: "
            type="email"
            placeholder="Enter your Email"
            required
            className="block w-full rounded-md px-3 py-1.5 text-base text-gray-200 outline outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            {...register("email", {
              required: "Email is required",
              validate: {
                matchPattern: (value) =>
                  /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value) ||
                  "Email address must be a valid address",
              },
            })}
            error={errors.email?.message}
          />
          <Input
            label="Password: "
            type="password"
            placeholder="Enter a password"
            required
            className="block w-full rounded-md px-3 py-1.5 text-base text-gray-200 outline outline-1 -outline-offset-1 outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters long",
              },
            })}
            error={errors.password?.message}
          />
          <Button
            loadingText={`Signing up...`}
            type="Submit"
            className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            isLoading={isLoading}
          >
            Sign Up
          </Button>
        
      </form>
        </div>
      
      <p className="mt-10 text-center text-sm/6 text-gray-500">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-semibold text-indigo-600 hover:text-indigo-500"
          >
            Sign In
          </Link>
        </p>
    </div>
  );
}

export default Signup;
