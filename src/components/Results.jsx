import { useSelector } from "react-redux";
import Charts from "./Charts";

const Results = () => {
  const { data, loading, error } = useSelector((state) => state.query);

  if (loading) return <p className="p-4">Loading results...</p>;
  if (error) return <p className="p-4 text-red-500">{error}</p>;

  return <div className="p-4">{data.length > 0 && <Charts data={data} />}</div>;
};

export default Results;
