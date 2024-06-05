import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "@/components/common/protected-route";
import LoginPage from "./pages/login.page";
import ResetPasswordPage from "./pages/reset-password.page";
import {
  DashboardPage,
  EventsPage,
  ProfilePage,
  HardwaresPage,
  UsersPage,
  AlarmsPage,
  AlarmHistoryPage,
  NotFoundPage,
  HomePage,
} from "./pages";

export const routes = createBrowserRouter([
  {
    path: "*",
    element: <NotFoundPage />,
  },
  {
    path: "/",
    element: <HomePage />,
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
      {
        path: "alarms",
        element: <AlarmsPage />,
      },
      {
        path: "alarms-history",
        element: <AlarmHistoryPage />,
      },
    ],
  },
]);
