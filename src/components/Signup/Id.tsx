import { Dispatch, SetStateAction, useState } from "react";
import { IdType } from "types/types";
import st from "./Id.module.scss";

interface Props {
  id: IdType;
  setId: Dispatch<SetStateAction<IdType>>;
  setStep: Dispatch<
    SetStateAction<"Name" | "Birth" | "Email" | "ID" | "check">
  >;
}

const Id = ({ id, setId, setStep }: Props) => {
  const [idValid, setIdValid] = useState<boolean>(false);
  const [pwValid, setPwValid] = useState<boolean>(false);

  const goNextStep = () => {
    if (id.id === "") {
      setIdValid(true);
      setTimeout(() => {
        setIdValid(false);
      }, 2000);
    } else if (id.pw === "") {
      setPwValid(true);
      setTimeout(() => {
        setPwValid(false);
      }, 2000);
    } else {
      setStep("check");
    }
  };

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
        {idValid && <span className={st.valid}>🚨 Please enter an id.</span>}

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
        {pwValid && <span className={st.valid}>🚨 Please enter a pw.</span>}

        <button onClick={() => goNextStep()}>Submit</button>
      </div>
    </>
  );
};

export default Id;
