import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../components/Home";
import AddCoffee from "../components/AddCoffee";
import CoffeeDetails from "../components/CoffeeDetails";
import UpdateCoffee from "../components/UpdateCoffee";
import SignIn from "../components/auth/SignIn";
import SignUp from "../components/auth/SignUp";
import Users from "../components/users/Users";
import PrivateRoute from "./PrivateRoute";
import YourPosts from "../user-profile/YourPosts";
import Profile from "../user-profile/Profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("http://localhost:5000/coffees"),
      },
      {
        path: "/add-coffee",
        element: (
          <PrivateRoute>
            <AddCoffee />
          </PrivateRoute>
        ),
      },
      {
        path: "/coffee-details/:id",
        element: <CoffeeDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffees/${params.id}`),
      },
      {
        path: "coffees/coffee-details/:id",
        element: <CoffeeDetails />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffees/${params.id}`),
      },
      {
        path: "coffees/update-coffees/:id",
        element: (
          <PrivateRoute>
            <UpdateCoffee />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/coffees/${params.id}`),
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
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/users",
        element: (
          <PrivateRoute>
            <Users />
          </PrivateRoute>
        ),
        loader: () => fetch("http://localhost:5000/users"),
      },
      {
        path: "/coffees",
        element: <YourPosts />,
        loader: () => fetch("http://localhost:5000/coffees"),
      },
    ],
  },
]);

export default router;
