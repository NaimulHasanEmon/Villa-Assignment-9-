import { createBrowserRouter } from "react-router-dom";
import Root from "../root/Root";
import Home from "../components/Shared/Home/Home";
import Properties from "../components/Shared/Properties/Properties";
import Agents from "../components/Shared/Agents/Agents";
import About from "../components/Shared/About/About";
import Contact from "../components/Shared/Contact/Contact";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        loader: () => fetch('/banner.json'),
        element: <Home></Home>,
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
    ],
  },
]);

export default Routes;
