import { useEffect, useState } from "react";
import st from "./Login.module.scss";

interface FromDB {
  id: string;
  pw: string;
}

const Login = () => {
  const [id, setId] = useState<string>();
  const [pw, setPw] = useState<string>();
  const [isLogin, setIsLogin] = useState<boolean>(false);

  const postLogin = () => {
    fetch("http://localhost:8000/login")
      .then((res) => res.json())
      .then((payload) => {
        console.log(payload);
        const matchedId = payload.filter((data: FromDB) => data?.id === id);
        const matchedPw = matchedId.filter((data: FromDB) => {
          return data.pw === pw;
        });
        setIsLogin(matchedPw);
      });
  };

  useEffect(() => {
    console.log(isLogin);
  }, [isLogin]);

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
