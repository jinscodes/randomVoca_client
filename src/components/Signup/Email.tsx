import Input from "components/LoginInput/Input";
import { Dispatch, SetStateAction } from "react";
import st from "./Email.module.scss";

interface Props {
  setStep: Dispatch<SetStateAction<"Name" | "Birth" | "Email" | "ID">>;
  setEmail: Dispatch<SetStateAction<string | undefined>>;
}

const Email = ({ setStep, setEmail }: Props) => {
  return (
    <>
      <p className={st.descrip}>Please enter your email.</p>

      <form className={st.email_container}>
        <label>Email</label>
        <Input name="email" placeholder="email" setState={setEmail} />

        <button onClick={() => setStep("ID")}>Next</button>
      </form>
    </>
  );
};

export default Email;
