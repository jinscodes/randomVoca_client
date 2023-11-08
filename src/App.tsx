import Chapter from "components/Chapter/Chapter";
import Note from "components/Note/Note";

import Login from "components/Login/Login";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";
import { DBDatas } from "types/types";
import st from "./App.module.scss";

function App() {
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
    <section className={st.app}>
      {!cookies.login && <Login />}
      {cookies.login && dbDatas && (
        <>
          <Chapter dbDatas={dbDatas} setMatch={setMatch} />
          <Note dbDatas={dbDatas} match={match} />
        </>
      )}
    </section>
  );
}

export default App;
