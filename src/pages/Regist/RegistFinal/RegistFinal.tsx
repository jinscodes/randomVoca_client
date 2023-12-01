import { useRegistContext } from "context/RegistContext";
import st from "./RegistFinal.module.scss";

const RegistFinal = () => {
  const { registValue } = useRegistContext();

  console.log(registValue);

  return (
    <section className={st.final_container}>
      <p className={st.info}>Information</p>
      <div className={`${st.info_box}`}>{registValue.title}</div>
      <div className={`${st.info_box}`}>{registValue.chapter}</div>
      <table className={st.word_table}>
        <th>
          {registValue.wordArr.map((el) => (
            <td>{el.en}</td>
          ))}
        </th>
        <tr>
          {registValue.wordArr.map((el) => (
            <td>{el.ko}</td>
          ))}
        </tr>
      </table>
      <button>Regist</button>
    </section>
  );
};

export default RegistFinal;
