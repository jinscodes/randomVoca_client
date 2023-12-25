import Input from "components/LoginInput/Input";
import { Dispatch, SetStateAction, useState } from "react";
import st from "./Email.module.scss";

interface Props {
  email: string | undefined;
  setStep: Dispatch<
    SetStateAction<"Name" | "Birth" | "Email" | "ID" | "check">
  >;
  setEmail: Dispatch<SetStateAction<string | undefined>>;
}

const Email = ({ email, setStep, setEmail }: Props) => {
  const [valid, setValid] = useState<boolean>(false);
  const goNextStep = () => {
    if (email) {
      setStep("ID");
    } else {
      setValid(true);
      setTimeout(() => {
        setValid(false);
      }, 2000);
    }
  };

  return (
    <>
      <p className={st.descrip}>Please enter your email.</p>

      <div className={st.email_container}>
        <label>Email</label>
        <Input name="email" placeholder="email" setState={setEmail} />
        {valid && <span className={st.valid}>🚨 Please enter an email.</span>}

        <button onClick={() => goNextStep()}>Next</button>
      </div>
    </>
  );
};

export default Email;
