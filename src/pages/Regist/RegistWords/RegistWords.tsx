import LeftArrow from "assets/svg/Left_arrow.svg";
import Remove from "assets/svg/Remove.svg";
import {
  ChangeEvent,
  Dispatch,
  SetStateAction,
  useEffect,
  useState,
} from "react";

import { useRegistContext } from "context/RegistContext";
import { useCreateRandom } from "hooks/useCreateRandom";
import { AddToList, RegistValue } from "types/types";
import st from "./RegistWords.module.scss";

interface Props {
  setPage: Dispatch<SetStateAction<string>>;
}

const RegistWords = ({ setPage }: Props) => {
  const { registValue, setRegistValue } = useRegistContext();
  const [word, setWord] = useState<AddToList>({
    en: "",
    ko: "",
    id: "",
  });

  const arrowClick = () => {
    setPage("regist/title");
  };

  const rmClick = (id: string | undefined) => {
    setRegistValue((prev: RegistValue) => ({
      ...prev,
      wordArr: prev.wordArr.filter((word) => word.id !== id),
    }));
  };

  const clickNextBtn = () => {
    if (registValue.wordArr.length === 0) return alert("Regist words");
    setPage("regist/final");
  };

  const AddToList = (newObj: AddToList) => {
    const randomId = useCreateRandom();

    if (word.en !== "" && word.ko !== "") {
      setRegistValue((prev: RegistValue) => ({
        ...prev,
        wordArr: [
          ...prev.wordArr,
          {
            en: newObj.en,
            ko: newObj.ko,
            id: randomId,
          },
        ],
      }));
      setWord({
        en: "",
        ko: "",
      });
    } else {
      alert("There is a empty place");
    }
  };

  const preventClose = (e: BeforeUnloadEvent) => {
    e.preventDefault();
    e.returnValue = "";
  };

  useEffect(() => {
    (() => {
      window.addEventListener("beforeunload", preventClose);
    })();
    return () => {
      window.removeEventListener("beforeunload", preventClose);
    };
  }, []);

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
            onKeyDown={(e) => {
              e.key === "Enter" && AddToList(word);
            }}
          />
        </div>
        <button onClick={() => AddToList(word)}>Add</button>
      </div>
      <table>
        <th>
          {registValue.wordArr &&
            registValue.wordArr.map((el) => <td>{el.en}</td>)}
        </th>
        <tr>
          {registValue.wordArr &&
            registValue.wordArr.map((el) => (
              <td>
                {el.ko}
                <img
                  src={Remove}
                  alt="remove"
                  className={st.rm_svg}
                  onClick={() => rmClick(el.id)}
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
