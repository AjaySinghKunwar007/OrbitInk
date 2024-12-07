import { useEffect, useState } from "react";

import "./App.css";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import { login, logout } from "./store/authSlice";
import { Outlet } from "react-router-dom";
import { Header, Footer, Container } from "./components/index";
import { ToastContainer } from "react-toastify";
import { addUser } from "./store/userSlice";
import usersDatabaseService from "./appwrite/usersDatabase";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      
        if (userData) {
          usersDatabaseService.getUser(userData.$id).then((data)=>{
            dispatch(login(userData));
            dispatch(addUser(data))

          })
        } else {  
          dispatch(logout())
        }
      })
      .catch((error) => {
        console.log("App.js :: useEffect :: error :: ", error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return loading ? (
    <>
      <div className=" h-screen w-full">
      
      </div>
    </>
  ) : (
    <div className="flex flex-col min-h-screen bg-gray-900">
      <Header />
      
     <main className="flex-grow">
      <Outlet></Outlet>
     </main>
      <Footer />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default App;
