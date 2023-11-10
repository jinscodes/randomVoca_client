import { DBDatas } from "types/types";

interface Props {
  dbDatas: DBDatas[];
  match: string;
}

const TestPaper = ({ dbDatas, match }: Props) => {
  return <div>TestPaper</div>;
};

export default TestPaper;
