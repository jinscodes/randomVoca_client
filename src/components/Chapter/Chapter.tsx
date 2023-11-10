import { Dispatch, SetStateAction } from "react";
import { useCookies } from "react-cookie";
import { DBDatas } from "types/types";
import Logout from "../../assets/svg/Logout.svg";
import st from "./Chapter.module.scss";

interface Prop {
  dbDatas: DBDatas[];
  setMatch: Dispatch<SetStateAction<string>>;
}

const Chapter = ({ dbDatas, setMatch }: Prop) => {
  const [cookies, setCookies, rmCookies] = useCookies(["login"]);

  const handleClick = (target: string) => {
    setMatch(target);
  };

  return (
    <section className={st.chapter_container}>
      <a href="/" className={st.logo}>
        Random Voca
      </a>
      Chapter
      {dbDatas.map((el, idx) => (
        <button
          key={idx}
          className={st.chapter}
          onClick={() => handleClick(`${el.title}|${el.chapter}`)}
        >
          {el.title} - {el.chapter}
        </button>
      ))}
      <img
        src={Logout}
        alt="logout"
        className={st.logout}
        onClick={() => rmCookies("login")}
      />
    </section>
  );
};

export default Chapter;
