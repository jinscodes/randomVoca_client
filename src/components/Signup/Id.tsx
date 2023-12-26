import axios from "axios";
import { Dispatch, SetStateAction, useEffect, useState } from "react";
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
  const [checkId, setCheckId] = useState<"default" | "possible" | "impossible">(
    "default"
  );

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

  const PostForCheckId = async () => {
    await axios
      .post("http://localhost:8080/signup/id", {
        id: id.id,
      })
      .then((res) => {
        if (res.data.checking === "possible") return setCheckId("possible");
        return setCheckId("impossible");
      });
  };

  useEffect(() => {
    setCheckId("default");
  }, [id.id]);

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

        {checkId === "possible" && (
          <div className={`${st.check_msg} ${st.use_id}`}>
            You can use this id.
          </div>
        )}
        {checkId === "impossible" && (
          <div className={`${st.check_msg} ${st.not_use_id}`}>
            This id already exists.
          </div>
        )}

        {(checkId === "default" || checkId === "impossible") && (
          <button onClick={() => PostForCheckId()}>Check</button>
        )}
        {checkId === "possible" && (
          <button onClick={() => goNextStep()}>Submit</button>
        )}
      </div>
    </>
  );
};

export default Id;
