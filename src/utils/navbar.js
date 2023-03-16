import React from 'react';
import SignUp from '../components/SignUp';
const SignIn = React.lazy(()=>import('../components/SignIn'));


export const navbar = [
  {
    id: 1,
    path: "/home",
    name: "Home",
    hidden: false,
    Element: <h3>{window.location.pathname}</h3>,
    search: "?",
  },
  {
    id: 2,
    path: "/profile",
    name: "Profile",
    hidden: false,
    Element: <h3>{window.location.pathname}</h3>,
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
    id: 1,
    path: "/signup",
    name: "Sign Up",
    hidden: true,
    Element: <SignUp/>,
    search: "?",
  },
  {
    id: 1,
    path: "/home",
    name: "Home",
    hidden: false,
    Element: <h3>{window.location.pathname}</h3>,
    search: "?",
  },
];
