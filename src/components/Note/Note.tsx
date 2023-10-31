import { useEffect, useState } from "react";
import { DBDatas, NoteData } from "types/types";
import st from "./Note.module.scss";

interface Prop {
  dbDatas: DBDatas[];
  match: string;
}

const Note = ({ dbDatas, match }: Prop) => {
  const [noteData, setNoteData] = useState<NoteData>();
  const title = match.split("|")[0];
  const chapter = match.split("|")[1];

  useEffect(() => {
    dbDatas.filter(
      (data) =>
        data.title === title &&
        setNoteData({ en: data.words_en, ko: data.words_ko })
    );
  }, [match]);

  noteData && console.log(noteData);

  return <section className={st.note}></section>;
};

export default Note;
