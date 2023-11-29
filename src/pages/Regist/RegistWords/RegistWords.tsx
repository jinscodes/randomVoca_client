import LeftArrow from "assets/svg/Left_arrow.svg";
import Remove from "assets/svg/Remove.svg";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";

import { useRegistContext } from "context/RegistContext";
import st from "./RegistWords.module.scss";

interface Props {
  setPage: Dispatch<SetStateAction<string>>;
}

interface AddToList {
  en: string | undefined;
  ko: string | undefined;
}

const RegistWords = ({ setPage }: Props) => {
  const { registValue, setRegistValue } = useRegistContext();
  const [wordArr, setWordArr] = useState<AddToList[]>([]);
  const [word, setWord] = useState<AddToList>({
    en: "",
    ko: "",
  });

  const arrowClick = () => {
    setPage("regist/title");
  };

  const rmClick = (ko: string | undefined) => {
    setWordArr((prev) => prev.filter((word) => word.ko !== ko));
  };

  const clickNextBtn = () => {
    setPage("regist/final");
  };

  const AddToList = (newObj: AddToList) => {
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

  // const preventClose = (e: BeforeUnloadEvent) => {
  //   e.preventDefault();
  //   e.returnValue = "";
  // };

  // useEffect(() => {
  //   (() => {
  //     window.addEventListener("beforeunload", preventClose);
  //   })();
  //   return () => {
  //     window.removeEventListener("beforeunload", preventClose);
  //   };
  // }, []);

  return (
    <section className={st.regist_container}>
      <img
        src={LeftArrow}
        alt="left_arrow"
        className={st.arrow}
        onClick={() => arrowClick()}
      />
      <div className={st.form_container}>
        <div className={st.input_container}>
          <input
            type="text"
            placeholder="EN"
            value={word.en}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              const inputValue = event.currentTarget.value;
              setWord((prev: AddToList) => ({
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
            <td>
              {el.ko}
              <img
                src={Remove}
                alt="remove"
                className={st.rm_svg}
                onClick={() => rmClick(el.ko)}
              />
            </td>
          ))}
        </tr>
      </table>
      <button className={st.submit_btn} onClick={() => clickNextBtn()}>
        Next
      </button>
    </section>
  );
};

export default RegistWords;
