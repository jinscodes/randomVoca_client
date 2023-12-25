import { Dispatch, SetStateAction, useState } from "react";
import { BirthType } from "types/types";
import st from "./Birth.module.scss";

interface Props {
  birth: BirthType;
  gender: string;
  setStep: Dispatch<
    SetStateAction<"Name" | "Birth" | "Email" | "ID" | "check">
  >;
  setBirth: Dispatch<SetStateAction<BirthType>>;
  setGender: Dispatch<SetStateAction<string>>;
}

let month = [
  "January",
  "Febuary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Birth = ({ birth, gender, setBirth, setGender, setStep }: Props) => {
  const [birthValid, setBirthValid] = useState<boolean>(false);
  const [genderValid, setGenderValid] = useState<boolean>(false);
  const geNextStep = () => {
    if (birth.year === 0 || birth.month === "" || birth.date === 0) {
      setBirthValid(true);
      setTimeout(() => {
        setBirthValid(false);
      }, 2000);
    } else if (gender === "") {
      setGenderValid(true);
      setTimeout(() => {
        setGenderValid(false);
      }, 2000);
    } else {
      setStep("Email");
    }
  };

  return (
    <>
      <p className={st.descrip}>Please enter your birth and gender.</p>

      <div className={st.birth_container}>
        <span className={st.title}>Birth</span>
        <div className={st.calendar_container}>
          <div className={st.month_title}>Month</div>
          <select
            className={st.calendar}
            onChange={(e) => {
              setBirth((prev) => ({
                ...prev,
                month: e.target.value,
              }));
            }}
          >
            <option value="" selected hidden>
              Month
            </option>
            {month.map((item) => (
              <option value={item} key={item} selected={item === birth.month}>
                {item}
              </option>
            ))}
          </select>
          <input
            onChange={(e) =>
              setBirth((prev) => ({
                ...prev,
                date: Number(e.target.value),
              }))
            }
            type="number"
            className={st.calendar}
            placeholder="Date"
          />
          <input
            onChange={(e) =>
              setBirth((prev) => ({
                ...prev,
                year: Number(e.target.value),
              }))
            }
            type="number"
            className={st.calendar}
            placeholder="Year"
          />
        </div>
        {birthValid && (
          <span className={st.valid}>🚨 Please enter a birth.</span>
        )}

        <span className={st.title}>Gender</span>
        <select
          onChange={(e) => {
            setGender(e.target.value);
          }}
          className={st.gender}
          value={gender}
        >
          <option value="" hidden>
            Gender
          </option>
          <option value="m">Male</option>
          <option value="f">Female</option>
          <option value="r">Rather not say</option>
        </select>
        {genderValid && (
          <span className={st.valid}>🚨 Please enter a gender.</span>
        )}

        <button
          className={st.button}
          type="button"
          onClick={() => geNextStep()}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Birth;
