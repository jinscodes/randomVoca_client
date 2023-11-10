import { useEffect, useState } from "react";
import { DBDatas } from "types/types";

import { useCookies } from "react-cookie";
import Logout from "../../assets/svg/Logout.svg";
import st from "./Home.module.scss";

const Home = () => {
  const [dbDatas, setDbDatas] = useState<DBDatas[]>();
  const [match, setMatch] = useState<string>("");
  const [isLogin, setIsLogin] = useState(false);
  const [cookies, setCookies, rmCookies] = useCookies(["login"]);

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((response) => response.json())
      .then((payload) => {
        setDbDatas([]);
        setDbDatas(payload);
      });
  }, []);

  return (
    <section className={st.home}>
      <p className={st.logo}>RandomVoca</p>
      <section className={st.button_container}>
        <div className={st.button}>
          <a href="/regist">Regist</a>
        </div>
        <div className={st.button}>
          <a href="/main">Note</a>
        </div>
      </section>
      <img
        src={Logout}
        alt="logout"
        className={st.logout}
        onClick={() => rmCookies("login")}
      />
    </section>
  );
};

export default Home;
