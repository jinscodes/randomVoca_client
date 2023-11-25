import { ChangeEvent, useState } from "react";
import st from "./Regist.module.scss";

interface AddToList {
  en?: string | undefined;
  ko?: string | undefined;
}

const Regist = () => {
  const [wordArr, setWordArr] = useState<AddToList[]>([]);
  const [word, setWord] = useState<AddToList>({
    en: "",
    ko: "",
  });

  const AddToList = (newObj: AddToList) => {
    console.log(word);

    if (word.en !== "" && word.ko !== "") {
      wordArr && setWordArr((prev) => prev?.concat(newObj));
      setWord({
        en: "",
        ko: "",
      });
    } else {
      alert("There is a empty place");
    }
  };

  // const registVoca = async () => {
  //   try {
  //     await fetch("http://localhost:8000/regist", {
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

  wordArr.length > 0 && console.log(wordArr);

  return (
    <section className={st.regist_container}>
      <div className={st.form_container}>
        <div className={st.input_container}>
          <input
            type="text"
            placeholder="EN"
            value={word.en}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              const inputValue = event.currentTarget.value;
              setWord((prev) => ({
                ...prev,
                en: inputValue,
              }));
            }}
          />
          <input
            type="text"
            placeholder="KO"
            value={word.ko}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              const inputValue = event.currentTarget.value;
              setWord((prev) => ({
                ...prev,
                ko: inputValue,
              }));
            }}
          />
        </div>
        <button onClick={() => AddToList(word)}>Add</button>
      </div>
      <table>
        <th>
          {wordArr.map((el) => (
            <td>{el.en}</td>
          ))}
        </th>
        <tr>
          {wordArr.map((el) => (
            <td>{el.ko}</td>
          ))}
        </tr>
      </table>
      <button>Submit</button>
    </section>
  );
};

export default Regist;
