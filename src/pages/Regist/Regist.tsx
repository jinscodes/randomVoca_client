import { RegistProvider } from "context/RegistContext";
import RegistFinal from "pages/Regist/RegistFinal/RegistFinal";
import RegistTitle from "pages/Regist/RegistTitle/RegistTitle";
import RegistWords from "pages/Regist/RegistWords/RegistWords";
import { useState } from "react";

const Regist = () => {
  const [page, setPage] = useState<string>("regist/title");
  // const registVoca = async () => {
  //   try {
  //     await fetch("http://localhost:8080/regist", {
  //       method: "POST",
  //       body: JSON.stringify({
  //         id: "id test",
  //         title: "title test",
  //         chapter: "chapter test",
  //       }),
  //     });
  //   } catch (error) {
  //     console.log(error);
  //     alert("Fail");
  //   }
  // };

  return (
    <RegistProvider>
      {page === "regist/title" && <RegistTitle setPage={setPage} />}
      {page === "regist/words" && <RegistWords setPage={setPage} />}
      {page === "regist/final" && <RegistFinal />}
    </RegistProvider>
  );
};

export default Regist;
