import { useState } from "react";
import st from "./Login.module.scss";

const Login = () => {
  const [id, setId] = useState<string>();
  const [pw, setPw] = useState<string>();

  const postLogin = () => {
    fetch("http://localhost:8000/login", {
      method: "POST",
      body: JSON.stringify({
        id: id,
        pw: pw,
      }),
    }).then((res) => console.log(res));
  };

  return (
    <section className={st.login}>
      <div>Login</div>
      <form
        // action="http://localhost:3000/"
        acceptCharset="utf-8"
        method="POST"
        name="form"
      >
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
              e.key === "Enter" && postLogin();
            }}
          />
        </label>

        <button
          onClick={() => {
            postLogin();
          }}
          type="button"
        >
          SUBMIT
        </button>
      </form>
    </section>
  );
};

export default Login;
