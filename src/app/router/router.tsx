import { createBrowserRouter } from "react-router-dom";
import routes from "./routes.json";
import { Navigate } from 'react-router-dom' 
import Login from "@/pages/login";
import Home from "@/pages/home";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to={routes.login} replace={true} />,
  },
  {
    path: routes.login,
    element: <Login />,
  },
  {
    path: routes.home,
    element: <Home />,
  },
]);

export default router;
