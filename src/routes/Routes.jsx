import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../components/Shared/Home/Home";
import Properties from "../components/Shared/Properties/Properties";
import Agents from "../components/Shared/Agents/Agents";
import About from "../components/Shared/About/About";
import Contact from "../components/Shared/Contact/Contact";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import PropertyDetails from "../components/Shared/PropertyDetails/PropertyDetails";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoutes from "./PrivateRoutes/PrivateRoutes";

const Routes = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <Root></Root>,
    children: [
      {
        path: "/",
        loader: () => fetch("/slider.json"),
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
        path: "/properties",
        element: <Properties></Properties>,
      },
      {
        path: "/agents",
        element: <Agents></Agents>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/contact",
        element: <Contact></Contact>,
      },
      {
        path: "/property/:id",
        loader: () => fetch("/commercial.json"),
        element: (
          <PrivateRoutes>
            <PropertyDetails></PropertyDetails>,
          </PrivateRoutes>
        ),
      },
      {
        path: "/policy",
        element: <></>,
      },
    ],
  },
]);

export default Routes;
