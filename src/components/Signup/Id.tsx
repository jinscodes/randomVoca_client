import { Dispatch, SetStateAction } from "react";
import { IdType } from "types/types";
import st from "./Id.module.scss";

interface Props {
  setId: Dispatch<SetStateAction<IdType>>;
}

const Id = ({ setId }: Props) => {
  return (
    <>
      <p className={st.descrip}>Please enter your id and pw.</p>

      <form className={st.id_container}>
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

        <button>Submit</button>
      </form>
    </>
  );
};

export default Id;
