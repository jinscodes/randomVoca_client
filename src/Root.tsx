import { useCookies } from "react-cookie";
import { Outlet } from "react-router-dom";

const Root = () => {
  const [cookies, setCookies, rmCookies] = useCookies(["login"]);

  return (
    <>
      {/* {!cookies.login && <Login />} */}
      <div>
        <Outlet />
      </div>
    </>
  );
};

export default Root;
