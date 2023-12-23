import { Dispatch, SetStateAction, useState } from "react";
import { BirthType } from "types/types";
import st from "./Birth.module.scss";

interface Props {
  birth: BirthType;
  gender: string | undefined;
  setStep: Dispatch<SetStateAction<"Name" | "Birth" | "email" | "ID">>;
  setBirth: Dispatch<SetStateAction<BirthType>>;
  setGender: Dispatch<SetStateAction<string | undefined>>;
}

const Birth = ({ birth, gender, setBirth, setGender, setStep }: Props) => {
  const [form, setForm] = useState({
    year: 2023,
    month: 1,
    day: 1,
  });
  let month = [];
  for (let m = 1; m <= 12; m += 1) {
    if (m < 10) {
      month.push("0" + m.toString());
    } else {
      month.push(m.toString());
    }
  }

  return (
    <>
      <p className={st.descrip}>Please enter your name.</p>

      <form acceptCharset="utf-8" method="POST" name="form">
        <span className={st.title}>Birth</span>
        <div className={st.calendar_container}>
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
          <div className={st.month_title}>Month</div>
          <select
            className={st.calendar}
            value={birth.month}
            onChange={(e) => {
              setForm({ ...form, month: Number(e.target.value) });
              setBirth((prev) => ({
                ...prev,
                month: Number(e.target.value),
              }));
            }}
          >
            {month.map((item) => (
              <option value={item} key={item}>
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
        </div>
        <select
          onChange={(e) => {
            console.log(e.target.value);
          }}
          className={st.gender}
          value={gender}
        >
          <option value="" selected hidden>
            Gender
          </option>
          <option value="m">Male</option>
          <option value="f">Female</option>
          <option value="r">Rather not say</option>
        </select>
        <button
          type="button"
          onClick={() => {
            setStep("email");
          }}
        >
          SUBMIT
        </button>
      </form>
    </>
  );
};

export default Birth;
