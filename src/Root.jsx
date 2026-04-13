import { createBrowserRouter } from "react-router";
import MainLayout from "./pages/MainLayout";
import Home from "./pages/TogglePage/Home";
import TimelinePage from "./pages/TogglePage/TimelinePage";
import StatsPage from "./pages/TogglePage/StatsPage";

export const Root = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: 'timeline',
        Component: TimelinePage
      },
      {
        path: 'stats',
        Component: StatsPage
      }
    ],
  },
]);
