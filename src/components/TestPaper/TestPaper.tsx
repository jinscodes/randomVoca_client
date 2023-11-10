import { DBDatas } from "types/types";
import st from "./TestPaper.module.scss";

interface Props {
  dbDatas: DBDatas[];
  match: string;
}

const TestPaper = ({ dbDatas, match }: Props) => {
  const title = match.split("|")[0];
  const chapter = match.split("|")[1];
  const filteredDatas = dbDatas.filter((data) => data.title === title);
  const en = filteredDatas[0] && filteredDatas[0].words_en;
  const ko = filteredDatas[0] && filteredDatas[0].words_ko;

  return (
    <section className={st.test_paper}>
      <p className={st.title}>
        Test: {title}-{chapter}
      </p>
      <div className={st.test_note}>
        <table>
          {["noteData"].map((el) => (
            <tbody>
              <th>{/* <td>{el.en}</td> */}</th>
              <tr>{/* <td>{el.ko}</td> */}</tr>
            </tbody>
          ))}
        </table>
      </div>
    </section>
  );
};

export default TestPaper;
