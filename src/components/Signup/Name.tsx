import Input from "components/LoginInput/Input";
import { Dispatch, SetStateAction, useState } from "react";
import st from "./Name.module.scss";

interface Prop {
  firstname: string | undefined;
  setStep: Dispatch<
    SetStateAction<"Name" | "Birth" | "Email" | "ID" | "check">
  >;
  setLastname: Dispatch<SetStateAction<string | undefined>>;
  setFirstname: Dispatch<SetStateAction<string | undefined>>;
}

const Name = ({ firstname, setStep, setLastname, setFirstname }: Prop) => {
  const [valid, setValid] = useState<boolean>(false);
  const goNextStep = () => {
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

      <div className={st.name_container}>
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

        <button type="button" onClick={() => goNextStep()}>
          Next
        </button>
      </div>
    </>
  );
};

export default Name;
