import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login as storeLogin } from "../store/authSlice";
import {addUser} from "../store/userSlice"
import authService from "../appwrite/auth";
import { Logo, Button, Input } from "./index";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import usersDatabaseService from "../appwrite/usersDatabase";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);
  const login = async (data) => {
    try {
      setError("");
      setIsLoading(true);
      const session = await authService.login(data);
     
      if (session) {
        const userAuth = await authService.getCurrentUser();
      const user= await usersDatabaseService.getUser(userAuth.$id)
      
        if (userAuth) { 
          dispatch(storeLogin(userAuth));
          dispatch(addUser(user))
          // // testing 
          
          // console.log("apprwite user data : ",userData)
          // const storedata= useSelector((state)=>state.auth.userData)
          // console.log("store datab :",storedata)
          navigate("/all-posts");
        }
      }
    } catch (error) {
      setError(error.message || "Login failed. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
       
        <div>
        
    
        <Logo />
     
      <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-100">
        Login to your account
      </h2>
        </div>

      </div>
      {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
     
      <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form onSubmit={handleSubmit(login)} className="space-y-6">
        
          <Input
            label="Email: "
            type="email"
            required

            className='block w-full rounded-mde px-3 py-1.5 text-base text-gray-200 outline outline-1 -outline-offset-1  outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
            placeholder="Enter your email"
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
            required
            className='block w-full rounded-mde px-3 py-1.5 text-base text-gray-200 outline outline-1 -outline-offset-1  outline-gray-600 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6'
            placeholder="Enter your password"
            {...register("password", {
              required: "Password is required",
            })}
            error={errors.password?.message}
          />

          <Button type="submit" isLoading={isLoading} loadingText={"Logging in..."}
          className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            LogIn
          </Button>
      </form>
        </div>
      <p className="mt-10 text-center text-sm/6 text-gray-500">
      Not a member?
        <Link
          to="/signup"
          className="font-semibold text-indigo-600 hover:text-indigo-500"
        >
          {` Sign Up`}
        </Link>
      </p>
    </div>
  );
}

export default Login;
