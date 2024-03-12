import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/home";
import Admin from "../pages/Admin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path:"/home" , element: <Home /> },
      { path:"/admin" , element: <Admin /> },
    

    ],
  },
]);