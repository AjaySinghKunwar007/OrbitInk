import "./index.css";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from 'react-redux'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import store from "./store/store.js"
import App from "./App.jsx";
import Home from './pages/Home.jsx'
import { AuthLayout } from './components/index.js'
import Login from "./pages/Login.jsx"
import Signup from "./pages/Signup.jsx"
import MyPosts from './pages/MyPosts.jsx'
import AddPost from "./pages/AddPost.jsx"
import EditPost from "./pages/EditPost.jsx"
import Post from './pages/Post.jsx'
import Profile from "./pages/Profile.jsx";




const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: (
          <AuthLayout authentication={false}>
            <Login />
          </AuthLayout>
        ),
      },
      {
        path: "/signup",
        element: (
          <AuthLayout authentication={false}>
            <Signup />
          </AuthLayout>
        ),
      },
      {
        path: "/my-posts",
        element: (
          <AuthLayout authentication>
            <MyPosts />
          </AuthLayout>
        ),
      },
      {
        path: "/add-post",
        element: (
          <AuthLayout authentication>
            <AddPost />
          </AuthLayout> 
        ),
      },{
        path:"/profile",
        element:(
          <AuthLayout authentication>
            <Profile/>
          </AuthLayout>
        )
      },
      {
        path: "/edit-post/:slug",
        element: (
          <AuthLayout authentication>
            <EditPost />
          </AuthLayout>
        ),
      },
      {
        path: "/post/:slug",
        element: <Post />,
      },
    ],
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </StrictMode>,
)
