import { Dispatch, SetStateAction } from "react";
import { DBDatas } from "types/types";
import st from "./Chapter.module.scss";

interface Prop {
  dbDatas: DBDatas[];
  setMatch: Dispatch<SetStateAction<string>>;
}

const Chapter = ({ dbDatas, setMatch }: Prop) => {
  const handleClick = (target: string) => {
    setMatch(target);
  };

  return (
    <section className={st.chapter_container}>
      {dbDatas.map((el, idx) => (
        <button
          key={idx}
          className={st.chapter}
          onClick={() => handleClick(`${el.title}|${el.chapter}`)}
        >
          {el.title} - {el.chapter}
        </button>
      ))}
    </section>
  );
};

export default Chapter;
