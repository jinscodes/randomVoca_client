import Login from "components/Login/Login";
import { useCookies } from "react-cookie";
import { Outlet } from "react-router-dom";

const Root = () => {
  const [cookies, setCookies, rmCookies] = useCookies(["login"]);

  return (
    <>
      {!cookies && <Login />}
      {cookies && (
        <div>
          <Outlet />
        </div>
      )}
    </>
  );
};

export default Root;
