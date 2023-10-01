import {
    createBrowserRouter,
  } from "react-router-dom";

  import Login from "../Pages/Login";
  import Register from '../Pages/Register';
  import HomeLayout from "../Layouts/HomeLayout";
  import HackathonLayout from "../Layouts/HackathonLayout";
  import MessageLayout from "../Layouts/MessageLayout";
export const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>,
    },

    {
      path: "/register",
      element: <Register/>,
    },
    {
      path: "/home",
      element: <HomeLayout/>,

    },
    {
      path: "/hackathons",
      element: <HackathonLayout/>,
    },

    {
      path: "/message",
      element: <MessageLayout/>,
    },
  ]);