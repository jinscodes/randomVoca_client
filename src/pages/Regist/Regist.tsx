import st from "./Regist.module.scss";

const Regist = () => {
  const registVoca = async () => {
    console.log("clicked");

    await fetch("http://localhost:8000/regist", {
      method: "POST",
      body: JSON.stringify([
        {
          id: "jins99",
          title: "경선식",
          chapter: "ch1",
          words_en: ["test", "test2"],
          words_ko: ["테스트", " 테스트2"],
          correct: 0,
          wrong: 0,
        },
      ]),
    }).then((res) => res.json());
  };

  return (
    <section className={st.regist_container}>
      <table>
        <th>
          <td>
            <input />
          </td>
        </th>
        <tr>
          <td>
            <input />
          </td>
        </tr>
        <button onClick={() => registVoca()}>button</button>
      </table>
    </section>
  );
};

export default Regist;
