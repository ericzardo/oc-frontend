import { createBrowserRouter } from "react-router-dom";

import Home from "@pages/Home";
import Chat from "@pages/Chat";
import AdminHome from "@pages/admin/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/c/*",
    element: <Chat />,
  },
  {
    path: "/admin/*",
    element: <AdminHome />,
  },
]);

export default router;
