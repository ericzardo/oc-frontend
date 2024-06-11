import { createBrowserRouter } from "react-router-dom";

import Home from "src/pages/Home";
import Chat from "src/pages/Chat";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/c/*",
    element: <Chat />,
  },
]);

export default router;
