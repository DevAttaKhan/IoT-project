import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "@/components/common/protected-route";
import { DashboardPage, EventsPage, HardwaresPage } from "./pages";
import { UsersPage } from "./pages/users.page";

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
        path: "users",
        element: <UsersPage />,
      },
      {
        path: "events",
        element: <EventsPage />,
      },
      {
        path: "hardwares",
        element: <HardwaresPage />,
      },
    ],
  },
]);
