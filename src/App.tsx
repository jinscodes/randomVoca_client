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

  return (
    <RouterProvider router={router} />
    // <section className={st.app}>
    //   {!cookies.login && <Login />}
    //   {cookies.login && dbDatas && (
    //     <>
    //       <Chapter dbDatas={dbDatas} setMatch={setMatch} />
    //       <Note dbDatas={dbDatas} match={match} />
    //       <TestPaper dbDatas={dbDatas} match={match} />
    //     </>
    //   )}
    // </section>
  );
}

export default App;
