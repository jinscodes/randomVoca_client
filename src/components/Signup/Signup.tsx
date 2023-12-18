import axios from "axios";
import { useState } from "react";
import st from "./Signup.module.scss";

const Signup = () => {
  const [id, setId] = useState<string>();
  const [pw, setPw] = useState<string>();

  const postSignup = async () => {
    await axios.post("");
  };

  console.log(id, pw);

  return (
    <section className={st.signup}>
      <div>Signup</div>

      <form acceptCharset="utf-8" method="POST" name="form">
        <label>
          ID
          <input
            name="id"
            onChange={(e) => setId(e.target.value)}
            placeholder="ID"
            type="text"
          />
        </label>
        <label>
          PW
          <input
            name="pw"
            onChange={(e) => setPw(e.target.value)}
            placeholder="PW"
            type="password"
            onKeyDown={(e) => {
              e.key === "Enter" && console.log("Entered");
            }}
          />
        </label>

        <button type="button" onClick={() => console.log("Clicked")}>
          SUBMIT
        </button>
      </form>
    </section>
  );
};

export default Signup;
