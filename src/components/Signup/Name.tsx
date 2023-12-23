import Input from "components/LoginInput/Input";
import { Dispatch, SetStateAction } from "react";
import st from "./Name.module.scss";

interface Prop {
  setStep: Dispatch<SetStateAction<"Name" | "Birth" | "Email" | "ID">>;
  setLastname: Dispatch<SetStateAction<string | undefined>>;
  setFirstname: Dispatch<SetStateAction<string | undefined>>;
}

const Name = ({ setStep, setLastname, setFirstname }: Prop) => {
  return (
    <>
      <p className={st.descrip}>Please enter your name.</p>

      <form acceptCharset="utf-8" method="POST" name="form">
        <label>
          Firstname
          <Input name="fName" placeholder="name" setState={setLastname} />
        </label>
        <label>
          Lastname
          <Input name="lName" placeholder="name" setState={setFirstname} />
        </label>

        <button
          type="button"
          onClick={() => {
            setStep("Birth");
          }}
        >
          Next
        </button>
      </form>
    </>
  );
};

export default Name;
