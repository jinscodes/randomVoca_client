import { ValuesType } from "types/types";
import st from "./Check.module.scss";

interface Props {
  values: ValuesType;
}

export const Check = ({ values }: Props) => {
  console.log(values);

  return (
    <div className={st.check_container}>
      <div>{values.lastname}</div>
      <div>{values.firstname}</div>
      <div>{values.birth.month}</div>
      <div>{values.birth.date}</div>
      <div>{values.birth.year}</div>
      <div>{values.gender}</div>
      <div>{values.email}</div>
      <div>{values.id.id}</div>
      <div>{values.id.pw}</div>
    </div>
  );
};

export default Check;
