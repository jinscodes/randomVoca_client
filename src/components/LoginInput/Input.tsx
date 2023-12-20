import { Dispatch, SetStateAction } from "react";
import st from "./Input.module.scss";

interface Props {
  name: string;
  placeholder: string;
  setState: Dispatch<SetStateAction<string | undefined>>;
}

const Input = ({ name, placeholder, setState }: Props) => {
  return (
    <input
      className={st.input}
      name={name}
      onChange={(e) => setState(e.target.value)}
      placeholder={placeholder}
      type="text"
    />
  );
};

export default Input;
