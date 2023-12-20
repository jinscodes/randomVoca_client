import { Dispatch, SetStateAction, useState } from "react";
import st from "./Birth.module.scss";

interface Props {
  setStep: Dispatch<SetStateAction<"Name" | "Birth" | "email" | "ID">>;
  setBirth: Dispatch<SetStateAction<string | undefined>>;
  setGender: Dispatch<SetStateAction<string | undefined>>;
}

const Birth = ({ setBirth, setGender, setStep }: Props) => {
  const [form, setForm] = useState({
    year: 2023,
    month: 1,
    day: 1,
  });
  const now = new Date();
  let years = [];
  let month = [];
  let days = [];
  for (let y = now.getFullYear(); y >= 1930; y -= 1) {
    years.push(y);
  }
  for (let m = 1; m <= 12; m += 1) {
    if (m < 10) {
      // 날짜가 2자리로 나타나야 했기 때문에 1자리 월에 0을 붙혀준다
      month.push("0" + m.toString());
    } else {
      month.push(m.toString());
    }
  }
  let date = new Date(form.year, form.month, 0).getDate();
  for (let d = 1; d <= date; d += 1) {
    if (d < 10) {
      // 날짜가 2자리로 나타나야 했기 때문에 1자리 일에 0을 붙혀준다
      days.push("0" + d.toString());
    } else {
      days.push(d.toString());
    }
  }

  return (
    <>
      <p className={st.descrip}>Please enter your name.</p>

      <form acceptCharset="utf-8" method="POST" name="form">
        <span className={st.title}>Birth</span>
        <div className={st.calendar_container}>
          <select
            className={st.calendar}
            value={form.year}
            onChange={(e) => setForm({ ...form, year: Number(e.target.value) })}
          >
            {years.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
          <select
            className={st.calendar}
            value={form.month}
            onChange={(e) =>
              setForm({ ...form, month: Number(e.target.value) })
            }
          >
            {month.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
          <select
            className={st.calendar}
            value={form.day}
            onChange={(e) => setForm({ ...form, day: Number(e.target.value) })}
          >
            {days.map((item) => (
              <option value={item} key={item}>
                {item}
              </option>
            ))}
          </select>
        </div>
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
