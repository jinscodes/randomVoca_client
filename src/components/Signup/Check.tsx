import axios from "axios";
import { Dispatch, SetStateAction, useEffect } from "react";
import { ValuesType } from "types/types";
import st from "./Check.module.scss";

interface Props {
  values: ValuesType;
  step: "Name" | "Birth" | "Email" | "ID" | "check";
  setStep: Dispatch<
    SetStateAction<"Name" | "Birth" | "Email" | "ID" | "check">
  >;
}

export const Check = ({ values, step, setStep }: Props) => {
  useEffect(() => {
    if (step === "Name")
      values = {
        lastname: "",
        firstname: "",
        birth: {
          year: 0,
          month: "",
          day: 0,
        },
        gender: "",
        email: "",
        id: {
          id: "",
          pw: "",
        },
      };
  }, []);

  if (values)
    return (
      <div className={st.check_container}>
        <div>
          <div>Lastname</div>
          <div>{values.lastname ? values.lastname : "-"}</div>
        </div>
        <div>
          <div>Firstname</div>
          <div>{values.firstname}</div>
        </div>
        <div>
          <div>Birth</div>
          <div>
            {values.birth.month}-{values.birth.day}-{values.birth.year}
          </div>
        </div>
        <div>
          <div>Gender</div>
          <div>{filterGender(values.gender)}</div>
        </div>
        <div>
          <div>Email</div>
          <div>{values.email}</div>
        </div>
        <div>
          <div>Id</div>
          <div>{values.id.id}</div>
        </div>
        <div>
          <div>Pw</div>
          <div>{values.id.pw}</div>
        </div>

        <button onClick={() => postSignup(values, setStep)}>Submit</button>
      </div>
    );

  return <></>;
};

export default Check;

const filterGender = (gender: string) => {
  switch (gender) {
    case "m":
      return "Male";
    case "f":
      return "Female";
    case "r":
      return "Rather Not Say";
  }
};

const postSignup = async (
  body: ValuesType,
  setStep: Dispatch<SetStateAction<"Name" | "Birth" | "Email" | "ID" | "check">>
) => {
  await axios
    .post("http://localhost:8080/signup", body)
    .then((res) => {
      if (res.status === 200) {
        setStep("Name");
        window.location.href = "/login";
      }
    })
    .catch((e) => {
      console.log(e);
      alert("Fail to signup");
    });
};
