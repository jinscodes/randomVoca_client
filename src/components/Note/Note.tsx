import { useEffect, useState } from "react";
import { DBDatas, NoteData } from "types/types";
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
  const title = match.split("|")[0];
  const chapter = match.split("|")[1];
  const filteredDatas = dbDatas.filter((data) => data.title === title);
  const en = filteredDatas[0] && filteredDatas[0].words_en;
  const ko = filteredDatas[0] && filteredDatas[0].words_ko;

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
  }, [match]);

  noteData && console.log(noteData);

  return (
    <section className={st.note}>
      <p className={st.title}>
        Voca: {title}-{chapter}
      </p>
      <div className={st.test_note}>
        <table>
          {noteData.map((el) => (
            <tbody>
              <th>
                <td>{el.en}</td>
              </th>
              <tr>
                <td>{el.ko}</td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </section>
  );
};

export default Note;
