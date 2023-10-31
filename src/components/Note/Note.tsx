import { DBDatas } from "types/types";
import st from "./Note.module.scss";

interface Prop {
  dbDatas: DBDatas[];
}

const Note = ({ dbDatas }: Prop) => {
  return <section className={st.note}>Click</section>;
};

export default Note;
