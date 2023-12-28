import Birth from "components/Signup/Birth";
import Check from "components/Signup/Check";
import Email from "components/Signup/Email";
import Id from "components/Signup/Id";
import Name from "components/Signup/Name";
import { useState } from "react";
import { BirthType, IdType, ValuesType } from "types/types";
import st from "./Signup.module.scss";

const Signup = () => {
  const [step, setStep] = useState<"Name" | "Birth" | "Email" | "ID" | "check">(
    "Name"
  );
  const [lastname, setLastname] = useState<string>();
  const [firstname, setFirstname] = useState<string>();
  const [birth, setBirth] = useState<BirthType>({
    year: 0,
    month: "",
    day: 0,
  });
  const [gender, setGender] = useState<string>("");
  const [email, setEmail] = useState<string>();
  const [id, setId] = useState<IdType>({
    id: "",
    pw: "",
  });
  const values: ValuesType = {
    lastname,
    firstname,
    birth,
    gender,
    email,
    id,
  };

  return (
    <section className={st.signup}>
      <div>Signup</div>

      {step === "Name" && (
        <Name
          firstname={firstname}
          setStep={setStep}
          setLastname={setLastname}
          setFirstname={setFirstname}
        />
      )}
      {step === "Birth" && (
        <Birth
          gender={gender}
          birth={birth}
          setStep={setStep}
          setBirth={setBirth}
          setGender={setGender}
        />
      )}
      {step === "Email" && (
        <Email email={email} setEmail={setEmail} setStep={setStep} />
      )}
      {step === "ID" && <Id id={id} setId={setId} setStep={setStep} />}
      {step === "check" && (
        <Check values={values} step={step} setStep={setStep} />
      )}
    </section>
  );
};

export default Signup;
