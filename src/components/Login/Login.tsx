import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";
import { Link } from "react-router-dom";
import st from "./Login.module.scss";

const Login = () => {
  const [id, setId] = useState<string>();
  const [pw, setPw] = useState<string>();
  const [cookies, setCookies] = useCookies(["login"]);

  const postLogin = async () => {
    await axios
      .post("http://localhost:8080/login", {
        id: id,
        pw: pw,
      })
      .then((res) => {
        if (res.status === 200)
          return setCookies("login", res.data.token, {
            maxAge: 60 * 60 * 24,
          });
        return alert(
          "아이디 또는 비밀번호가 잘못되었습니다. 다시 입력해주세요"
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <section className={st.login}>
      <div>Login</div>

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
              e.key === "Enter" && postLogin();
            }}
          />
        </label>

        <div className={st.signup}>
          <Link to={"/signup"}>Signup</Link>
        </div>

        <button onClick={() => postLogin()} type="button">
          SUBMIT
        </button>
      </form>
    </section>
  );
};

export default Login;
