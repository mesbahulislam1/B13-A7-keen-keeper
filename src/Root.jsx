import { createBrowserRouter } from "react-router";
import MainLayout from "./pages/MainLayout";
import Home from "./pages/TogglePage/Home";
import TimelinePage from "./pages/TogglePage/TimelinePage";
import StatsPage from "./pages/TogglePage/StatsPage";
import FriendDetails from "./pages/FriendDetails";

export const Root = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        loader: ()=> fetch('data.json'),
        Component: Home,
      },
      {
        path: 'frienddetails/:id',
        Component: FriendDetails
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
