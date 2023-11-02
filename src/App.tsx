import Chapter from "components/Chapter/Chapter";
import Note from "components/Note/Note";

import { useEffect, useState } from "react";
import { DBDatas } from "types/types";
import st from "./App.module.scss";

function App() {
  const [dbDatas, setDbDatas] = useState<DBDatas[]>();
  const [match, setMatch] = useState<string>("");
  useEffect(() => {
    fetch("http://localhost:8000/")
      .then((response) => response.json())
      .then((payload) => {
        setDbDatas([]);
        setDbDatas(payload);
      });

    fetch("http://localhost:8000/login")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  }, []);

  return (
    <section className={st.app}>
      {dbDatas && (
        <>
          <Chapter dbDatas={dbDatas} setMatch={setMatch} />
          <Note dbDatas={dbDatas} match={match} />
        </>
      )}
    </section>
  );
}

export default App;
