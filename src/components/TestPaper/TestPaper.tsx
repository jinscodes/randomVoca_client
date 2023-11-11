import { useEffect, useState } from "react";
import { DBDatas, TestNoteData } from "types/types";
import st from "./TestPaper.module.scss";

interface Props {
  dbDatas: DBDatas[];
  match: string;
}

const TestPaper = ({ dbDatas, match }: Props) => {
  const [testNote, setNoteData] = useState<TestNoteData[]>([
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
          },
        ]);
      }
    }
  }, [match]);

  testNote && console.log(testNote);

  return (
    <section className={st.test_paper}>
      <p className={st.title}>
        Test: {title}-{chapter}
      </p>
      <div className={st.test_note}>
        <table>
          {testNote.map((el) => (
            <tbody>
              <th>
                <td>{el.en}</td>
              </th>
              <tr>
                <input type="text" placeholder={`${el.en}`} />
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    </section>
  );
};

export default TestPaper;
