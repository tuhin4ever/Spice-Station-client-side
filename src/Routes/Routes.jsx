import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import ChefDetails from "../Pages/ChefDetails/ChefDetails";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import LoadingSpinner from "../LoadingSpinner.jsx/LoadingSpinner";
import Blog from "../Pages/Blog/Blog";
import Search from "../Pages/SearchPage/Search/Search";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/chef/:id",
        element: (
          <PrivateRoute>
            <ChefDetails></ChefDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://spice-station-server-tuhin4ever.vercel.app/chef/${params.id}`
          ),
      },
      {
        path: "blog",
        element: <Blog></Blog>,
      },
      {
        path: "loader",
        element: <LoadingSpinner />,
      },
      {
        path: "search",
        element: <PrivateRoute><Search></Search></PrivateRoute>,
      },
    ],
  },
]);

export default router;
