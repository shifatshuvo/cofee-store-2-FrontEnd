import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./components/Home";
import AddCoffee from "./components/AddCoffee";
import UpdateCoffee from "./components/UpdateCoffee";
import CoffeeDetails from "./components/CoffeeDetails";
import Main from "./layout/Main";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import AuthProviders from "./components/providers/AuthProviders";
import Users from "./components/users/Users";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () =>
          fetch("https://coffee-store-backend-d0re.onrender.com/coffees"),
      },
      {
        path: "/add-coffee",
        element: <AddCoffee />,
      },
      {
        path: "/coffee-details/:id",
        element: <CoffeeDetails />,
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-backend-d0re.onrender.com/coffees/${params.id}`
          ),
      },
      {
        path: "/update-coffees/:id",
        element: <UpdateCoffee />,
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-backend-d0re.onrender.com/coffees/${params.id}`
          ),
      },
      {
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        path: "/sign-up",
        element: <SignUp />,
      },
      {
        path: "/users",
        element: <Users />,
        loader: () =>
          fetch("https://coffee-store-backend-d0re.onrender.com/users"),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>
);
