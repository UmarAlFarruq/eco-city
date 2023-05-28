import React from "react";
// import Profile from "../components/Profile";
import Home from "../components/Home";
import SignUp from "../components/SignUp";
import AddData from "../components/AddData";
import Details from "../components/Details";
const SignIn = React.lazy(() => import("../components/SignIn"));
const Profile = React.lazy(()=> import("../components/Profile") )
export const navbar = [
  {
    id: 1,
    path: "/home",
    name: "Home",
    hidden: false,
    Element: <Home />,
    search: "?",
  },
  {
    id: 2,
    path: "/profile",
    name: "Profile",
    hidden: false,
    Element: <Profile />,
    search: "?",
  },
  {
    id: 3,
    path: "/signin",
    name: "Sign In",
    hidden: true,
    Element: <SignIn />,
    search: "?",
  },
  {
    id: 4,
    path: "/signup",
    name: "Sign Up",
    hidden: true,
    Element: <SignUp />,
    search: "?",
  },
  {
    id: 5,
    path: "/add",
    name: "AddHouse",
    hidden: false,
    Element: <AddData />,
    search: "?",
  },
  {
    id: 6,
    path: "/home/:id",
    name: "Details",
    hidden: false,
    Element:  <Details/>,
    search: "?",
  },
];
