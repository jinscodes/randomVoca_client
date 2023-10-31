import { DBDatas } from "types/types";
import st from "./Chapter.module.scss";

interface Prop {
  dbDatas: DBDatas[];
}

const Chapter = ({ dbDatas }: Prop) => {
  return <section className={st.chapter}>Chapter</section>;
};

export default Chapter;
