import Birth from "components/Signup/Birth";
import Name from "components/Signup/Name";
import { useState } from "react";
import { BirthType } from "types/types";
import st from "./Signup.module.scss";

const Signup = () => {
  const [step, setStep] = useState<"Name" | "Birth" | "email" | "ID">("Name");
  const [lastname, setLastname] = useState<string>();
  const [firstname, setFirstname] = useState<string>();
  const [birth, setBirth] = useState<BirthType>({
    year: 0,
    month: 0,
    date: 0,
  });
  const [gender, setGender] = useState<string>();

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

  // console.log(lastname, firstname, birth, gender);

  return (
    <section className={st.signup}>
      <div>Signup</div>

      {step === "Name" && (
        <Name
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
          setGender={setFirstname}
        />
      )}
    </section>
  );
};

export default Signup;
