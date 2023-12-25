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
    date: 0,
  });
  const [gender, setGender] = useState<string>("");
  const [email, setEmail] = useState<string>();
  const [id, setId] = useState<IdType>({
    id: "",
    pw: "",
  });
  const value: ValuesType = {
    lastname,
    firstname,
    birth,
    gender,
    email,
    id,
  };

  // const postSignup = async () => {
  //   await axios
  //     .post("http://localhost:8080/signup", {
  //       id: "testid",
  //       pw: "testpw",
  //     })
  //     .then((res) => {
  //       console.log(res);
  //     });

  //   await axios.get("http://localhost:8080/signup").then((res) => {
  //     console.log(res);
  //   });
  // };

  console.log(value);

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
      {step === "check" && <Check />}
    </section>
  );
};

export default Signup;
