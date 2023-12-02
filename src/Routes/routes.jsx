import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Pages/Login/Login";
import Contact from "../Pages/Contact/Contact";
import NotFound from "./../Pages/NotFound/NotFound";
import Blog from "..//Pages/Blog/Blog";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
      },
    
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/blog",
        element: <Blog />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/login",
    element: <Login />,
  }
]); // browser router hook & take array of objects

export default routes;
