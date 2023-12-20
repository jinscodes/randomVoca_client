import Birth from "components/Signup/Birth";
import Name from "components/Signup/Name";
import { useState } from "react";
import st from "./Signup.module.scss";

const Signup = () => {
  const [step, setStep] = useState<"Name" | "Birth" | "email" | "ID">("Name");
  const [lastname, setLastname] = useState<string>();
  const [firstname, setFirstname] = useState<string>();
  const [birth, setBirth] = useState<string>();
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
          setStep={setStep}
          setBirth={setLastname}
          setGender={setFirstname}
        />
      )}
    </section>
  );
};

export default Signup;
