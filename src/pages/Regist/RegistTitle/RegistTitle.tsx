import LeftArrow from "assets/svg/Left_arrow.svg";
import { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { VocabInfo } from "types/types";
import st from "./RegistTitle.module.scss";

interface Props {
  setPage: Dispatch<SetStateAction<string>>;
}

const RegistTitle = ({ setPage }: Props) => {
  const [vocabInfo, setVocabInfo] = useState<VocabInfo>({
    title: "",
    chapter: "",
  });

  const clickNextBtn = () => {
    if (!vocabInfo?.title || !vocabInfo?.chapter)
      return alert("Necessary values are empty");

    setPage("regist/words");
  };

  const handleChange = (target: ChangeEvent<HTMLInputElement>, key: string) => {
    const value = target.currentTarget.value;
    setVocabInfo((prev: VocabInfo) => ({
      ...prev,
      [key]: value,
    }));
  };

  const arrowClick = () => {
    window.location.href = "/";
  };

  return (
    <section className={st.regist_title_container}>
      <img
        src={LeftArrow}
        alt="left_arrow"
        className={st.arrow}
        onClick={() => arrowClick()}
      />
      <div>
        <p>Regist Vocab Title</p>
        <input
          type="text"
          placeholder="Vocab title"
          onChange={(target) => handleChange(target, "title")}
        />
      </div>
      <div>
        <p>Regist Chapter</p>
        <input
          type="text"
          placeholder="Chapter"
          onChange={(target) => handleChange(target, "chapter")}
        />
      </div>
      <button onClick={() => clickNextBtn()}>Next</button>
    </section>
  );
};

export default RegistTitle;
