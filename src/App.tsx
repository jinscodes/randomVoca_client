import Root from "Root";
import Home from "pages/Home/Home";
import Main from "pages/Main/Main";
import Regist from "pages/Regist/Regist";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement: "NOT_FOUND",
      children: [
        {
          index: true,
          element: <Home />,
        },
        // {
        //   path: "/login",
        //   element: <Login />,
        // },
        {
          path: "/main",
          element: <Main />,
        },
        {
          path: "/regist",
          element: <Regist />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
