import { Dispatch, SetStateAction } from "react";
import { BirthType } from "types/types";
import st from "./Birth.module.scss";

interface Props {
  birth: BirthType;
  gender: string;
  setStep: Dispatch<SetStateAction<"Name" | "Birth" | "Email" | "ID">>;
  setBirth: Dispatch<SetStateAction<BirthType>>;
  setGender: Dispatch<SetStateAction<string>>;
}

const Birth = ({ birth, gender, setBirth, setGender, setStep }: Props) => {
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

  return (
    <>
      <p className={st.descrip}>Please enter your name and gender.</p>

      <form>
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

        <button
          type="button"
          onClick={() => {
            setStep("Email");
          }}
        >
          Next
        </button>
      </form>
    </>
  );
};

export default Birth;
