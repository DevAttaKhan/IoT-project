import { createBrowserRouter } from "react-router-dom";
import { ProtectedRoute } from "@/components/common/protected-route";
import {
  DashboardPage,
  EventsPage,
  ProfilePage,
  HardwaresPage,
  UsersPage,
  AlarmsPage,
} from "./pages";

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
    ],
  },
]);
