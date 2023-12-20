import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import Logout from "../../assets/svg/Logout.svg";
import st from "./Home.module.scss";

const Home = () => {
  const [cookies, setCookies, rmCookies] = useCookies(["login"]);

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
      <Link to={"/login"}>
        <img
          src={Logout}
          alt="logout"
          className={st.logout}
          onClick={() => rmCookies("login")}
        />
      </Link>
    </section>
  );
};

export default Home;
