import { useEffect, useState } from "react";
import { DBDatas } from "types/types";

import Chapter from "components/Chapter/Chapter";
import Note from "components/Note/Note";

import TestPaper from "components/TestPaper/TestPaper";
import st from "./Main.module.scss";

const Main = () => {
  const [dbDatas, setDbDatas] = useState<DBDatas[]>();
  const [match, setMatch] = useState<string>("");

  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((response) => response.json())
      .then((payload) => {
        setDbDatas([]);
        setDbDatas(payload);
      });
  }, []);

  dbDatas && console.log(dbDatas);

  return (
    <section className={st.main}>
      {dbDatas && <Chapter dbDatas={dbDatas} setMatch={setMatch} />}
      <div className={st.note_container}>
        {dbDatas && <Note dbDatas={dbDatas} match={match} />}
        {dbDatas && <TestPaper dbDatas={dbDatas} match={match} />}
      </div>
    </section>
  );
};

export default Main;
