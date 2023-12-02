import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Login from "../Pages/Login/Login";
import Contact from "../Pages/Contact/Contact";
import NotFound from "./../Pages/NotFound/NotFound";
import About from "../Pages/About/About";
import Home from "../Pages/Home/Home";
import UserData from "../Pages/User/UserData";
import UserId from "../Components/UserID/UserId";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
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
        path: "/user",
        element: <UserData />,
        loader: () =>  fetch('https://jsonplaceholder.typicode.com/users')
      },
      {
        path: "/users/:userid",
        element: <UserId />,
        loader: ({params}) =>  fetch(`https://jsonplaceholder.typicode.com/users/${params.userid}`)
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
