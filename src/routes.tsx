import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "@/components/common/protected-route";
import { DashboardPage, EventsPage, ProfilePage, HardwaresPage } from "./pages";
import { UsersPage } from "./pages/users.page";
import LoginPage from "./pages/login.page";
import ResetPasswordPage from "./pages/reset-password.page";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/reset-password",
    element: <ResetPasswordPage />,
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
        path: "profile",
        element: <ProfilePage />,
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
