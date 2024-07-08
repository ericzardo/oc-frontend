import { createBrowserRouter } from "react-router-dom";

import Home from "@pages/Home";
import Chat from "@pages/Chat";
import AdminHome from "@pages/admin/Home";
import SignIn from "@pages/Sign/In";
import SignUp from "@pages/Sign/Up";

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
    path: "/sign-up",
    element: <SignUp />,
  },
  {
    path: "/sign-in",
    element: <SignIn />,
  },
  {
    path: "/admin/*",
    element: <AdminHome />,
  },
]);

export default router;
