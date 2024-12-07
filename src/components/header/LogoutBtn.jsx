import React, { useState } from "react";
import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FaSpinner } from "react-icons/fa"; // Spinner icon
import { useNavigate } from "react-router-dom";
function LogoutBtn() {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const navigate= useNavigate()

  // Logout handler function
  const logoutHandler = async () => {
    try {
      setIsLoading(true);
      await authService.logout(); // Call the logout service
      dispatch(logout()); // Dispatch Redux logout action
      toast.success("Logged out successfully!"); // Success notification
      navigate("/login");
    } catch (error) {
      console.error("Logout failed:", error);
      toast.error(
        error.message || "Logout failed. Please check your connection."
      ); // Error feedback
    } finally {
      setIsLoading(false);
    }
  };

  // Button label and spinner logic
  const buttonContent = isLoading ? (
    <>
      <FaSpinner className="animate-spin mr-2 align-middle" />
      Logging out...
    </>
  ) : (
    "Logout"
  );

  return (
    <button
      aria-disabled={isLoading}
      disabled={isLoading}
      onClick={()=>{logoutHandler()}}
      aria-label="Logout"
      className={` w-full flex flex-start
        ${isLoading ? "cursor-not-allowed opacity-50" : ""}`}
    >
      {buttonContent}
    </button>
  );
}

export default LogoutBtn;
