import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "@/components/common/protected-route";
import { DashboardPage } from "./pages/dashboard.page";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/login",
    element: <h1>Login Here</h1>,
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        path: "dashboard",
        element: <DashboardPage />,
      },
      {
        path: "about",
        element: <h1>Login Here</h1>,
      },
    ],
  },
]);
