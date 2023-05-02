import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login/Login";
import Register from "../Pages/Login/Register/Register";
import ChefDetails from "../Pages/ChefDetails/ChefDetails";
const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
          path: "/",
          element: <Home></Home>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/register",
          element: <Register></Register>
        },
        {
          path: "/chef/:id",
          element: <ChefDetails></ChefDetails>,
          loader: ({ params }) =>
            fetch(
              `https://spice-station-server.vercel.app/chef/${params.id}`
            ),
        },
      ]
  
    },

  ]);

  export default router;