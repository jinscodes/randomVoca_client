import { useEffect, useState } from "react";
import { DBDatas, NoteData } from "types/types";

import FlipClose from "../../assets/svg/flip_close.svg";
import FlipOpen from "../../assets/svg/flip_open.svg";
import st from "./Note.module.scss";

interface Prop {
  dbDatas: DBDatas[];
  match: string;
}

const Note = ({ dbDatas, match }: Prop) => {
  const [noteData, setNoteData] = useState<NoteData[]>([
    {
      en: "",
      ko: "",
    },
  ]);
  const [isFlip, setIsFlip] = useState<"open" | "close" | "none">("none");
  const title = match.split("|")[0];
  const chapter = match.split("|")[1];
  const filteredDatas = dbDatas.filter((data) => data.title === title);
  const en = filteredDatas[0] && filteredDatas[0].words_en;
  const ko = filteredDatas[0] && filteredDatas[0].words_ko;

  const flipVocaNote = () => {
    isFlip === "open" && setIsFlip("close");
    isFlip === "close" && setIsFlip("open");
  };

  useEffect(() => {
    if (en && ko) {
      setNoteData([]);
      for (let i = 0; i < en.length; i++) {
        setNoteData((prev) => [
          ...prev,
          {
            en: en[i].name,
            ko: ko[i].name,
          },
        ]);
      }
    }

    if (match.length === 0) setIsFlip("none");
    if (match.length !== 0) setIsFlip("open");
  }, [match]);

  return (
    <section className={st.note}>
      <p className={st.title}>
        Voca: {title}-{chapter}
      </p>
      <div className={st.test_note}>
        <table>
          {isFlip === "open" &&
            noteData.map((el) => (
              <tbody>
                <th>
                  <td>{el.en}</td>
                </th>
                <tr>
                  <td>
                    {el.ko.split("|").map((word, idx) => (
                      <>
                        {idx !== 0 && idx !== el.ko.split("|").length && (
                          <>{word}, </>
                        )}
                        {idx === el.ko.split("|").length - 1 && <>{word}</>}
                      </>
                    ))}
                  </td>
                </tr>
              </tbody>
            ))}
          {isFlip === "close" && <div>Testing...</div>}
        </table>
        {isFlip === "close" && (
          <img
            src={FlipOpen}
            alt="open"
            className={st.flip}
            onClick={() => flipVocaNote()}
          />
        )}
        {isFlip === "open" && (
          <img
            src={FlipClose}
            alt="close"
            className={st.flip}
            onClick={() => flipVocaNote()}
          />
        )}
      </div>
    </section>
  );
};

export default Note;
