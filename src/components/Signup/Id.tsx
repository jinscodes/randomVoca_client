import { Dispatch, SetStateAction } from "react";
import { IdType } from "types/types";
import st from "./Id.module.scss";

interface Props {
  id: IdType;
  setId: Dispatch<SetStateAction<IdType>>;
}

const Id = ({ id, setId }: Props) => {
  return (
    <>
      <p className={st.descrip}>Please enter your id and pw.</p>

      <div className={st.id_container}>
        <label>Id</label>
        <input
          className={st.input}
          type="text"
          placeholder="id"
          onChange={(e) =>
            setId((prev) => ({
              ...prev,
              id: e.target.value,
            }))
          }
        />
        {id.id && <span className={st.valid}>🚨 Please enter a id.</span>}

        <label>Pw</label>
        <input
          className={st.input}
          type="text"
          placeholder="pw"
          onChange={(e) =>
            setId((prev) => ({
              ...prev,
              pw: e.target.value,
            }))
          }
        />
        {id.pw && <span className={st.valid}>🚨 Please enter a pw.</span>}

        <button onClick={() => console.log("Click")}>Submit</button>
      </div>
    </>
  );
};

export default Id;
