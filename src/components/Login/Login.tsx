import axios from "axios";
import { useState } from "react";
import { useCookies } from "react-cookie";
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
        console.log(res);
      })
      .catch((err) => {
        console.log(id, pw);
        console.log(err);
      });

    // await fetch("http://localhost:8080/login", {
    //   method: "POST",
    //   mode: "cors",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     id: id,
    //     pw: pw,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);

    //     if (data.status === 200) {
    //       setCookies("login", data.token, {
    //         maxAge: 60 * 60 * 24,
    //       });
    //     } else {
    //       alert("아이디 또는 비밀번호가 잘못되었습니다. 다시 입력해주세요");
    //     }
    //   });
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

        <button onClick={() => postLogin()} type="button">
          SUBMIT
        </button>
      </form>
    </section>
  );
};

export default Login;
