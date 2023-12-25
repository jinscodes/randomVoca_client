import Input from "components/LoginInput/Input";
import { Dispatch, SetStateAction, useState } from "react";
import st from "./Name.module.scss";

interface Prop {
  firstname: string | undefined;
  setStep: Dispatch<SetStateAction<"Name" | "Birth" | "Email" | "ID">>;
  setLastname: Dispatch<SetStateAction<string | undefined>>;
  setFirstname: Dispatch<SetStateAction<string | undefined>>;
}

const Name = ({ firstname, setStep, setLastname, setFirstname }: Prop) => {
  const [valid, setValid] = useState<boolean>(false);
  const nextStep = () => {
    if (firstname) {
      setStep("Birth");
    } else {
      setValid(true);
      setTimeout(() => {
        setValid(false);
      }, 2000);
    }
  };

  return (
    <>
      <p className={st.descrip}>Please enter your name.</p>

      <form acceptCharset="utf-8" method="POST" name="form">
        <label>
          Firstname
          <Input name="fName" placeholder="name" setState={setFirstname} />
        </label>
        {valid && (
          <span className={st.validation}>🚨 Please enter a name.</span>
        )}
        <label>
          Lastname
          <Input
            name="lName"
            placeholder="name (optional)"
            setState={setLastname}
          />
        </label>

        <button type="button" onClick={() => nextStep()}>
          Next
        </button>
      </form>
    </>
  );
};

export default Name;
