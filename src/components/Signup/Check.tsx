import axios from "axios";
import { ValuesType } from "types/types";
import st from "./Check.module.scss";

interface Props {
  values: ValuesType;
}

export const Check = ({ values }: Props) => {
  return (
    <div className={st.check_container}>
      <div>
        <div>Lastname</div>
        <div>{values.lastname ? values.lastname : "-"}</div>
      </div>
      <div>
        <div>Firstname</div>
        <div>{values.firstname}</div>
      </div>
      <div>
        <div>Birth</div>
        <div>
          {values.birth.month}-{values.birth.date}-{values.birth.year}
        </div>
      </div>
      <div>
        <div>Gender</div>
        <div>{filterGender(values.gender)}</div>
      </div>
      <div>
        <div>Email</div>
        <div>{values.email}</div>
      </div>
      <div>
        <div>Id</div>
        <div>{values.id.id}</div>
      </div>
      <div>
        <div>Pw</div>
        <div>{values.id.pw}</div>
      </div>

      <button onClick={() => postSignup(values)}>Submit</button>
    </div>
  );
};

export default Check;

const filterGender = (gender: string) => {
  switch (gender) {
    case "m":
      return "Male";
    case "f":
      return "Female";
    case "r":
      return "Rather Not Say";
  }
};

const postSignup = async (body: ValuesType) => {
  await axios.post("http://localhost:8080/signup", body).then((res) => {
    console.log(res);
  });
};
