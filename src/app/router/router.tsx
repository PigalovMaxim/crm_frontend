import { createBrowserRouter, Navigate } from "react-router-dom";
import routes from "./routes.json";
import Login from "@/pages/login";
import Home from "@/pages/home";
import Tasks from "@/pages/tasks";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Navigate to={routes.login} replace={true} />,
  },
  {
    path: routes.login,
    element: <Login />,
  },
  {
    path: routes.tasks,
    element: <Tasks />,
  },
  {
    path: routes.home,
    element: <Home />,
  },
]);

export default router;
