import Note from "components/Note/Note";
import { useEffect, useState } from "react";
import { DBDatas } from "types/types";

const Main = () => {
  const [dbDatas, setDbDatas] = useState<DBDatas[]>();
  const [match, setMatch] = useState<string>("");
  const [isLogin, setIsLogin] = useState(false);

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
    <section>{dbDatas && <Note dbDatas={dbDatas} match={match} />}</section>
  );
};

export default Main;
