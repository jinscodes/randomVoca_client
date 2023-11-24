import { useState } from "react";
import st from "./Regist.module.scss";

interface AddToList {
  en: string;
  ko: string;
}

const Regist = () => {
  const [wordArr, setWordArr] = useState<AddToList[]>();

  const AddToList = (target: AddToList) => {
    wordArr && setWordArr((prev) => prev?.concat(target));
  };
  const registVoca = async () => {
    try {
      await fetch("http://localhost:8000/regist", {
        method: "POST",
        body: JSON.stringify({
          id: "id test",
          title: "title test",
          chapter: "chapter test",
        }),
      });
    } catch (error) {
      console.log(error);
      alert("Fail");
    }
  };

  console.log(wordArr);

  return (
    <section className={st.regist_container}>
      <div className={st.form_container}>
        <div className={st.input_container}>
          <input type="text" placeholder="EN" />
          <input type="text" placeholder="KO" />
        </div>
        <button>Add</button>
      </div>
      <table>
        <th>
          <td></td>
          <td></td>
        </th>
        <tr>
          <td></td>
          <td></td>
        </tr>
      </table>
      <button>Submit</button>
    </section>
  );
};

export default Regist;
