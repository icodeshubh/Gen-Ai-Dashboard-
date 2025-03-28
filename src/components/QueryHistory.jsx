import { useSelector } from "react-redux";

const QueryHistory = () => {
  const history = useSelector((state) => state.query.history);
  const queryCount = history.length; // Count total queries

  return (
    <div className="w-1/4 text-center min-h-screen p-4 ">
     
      <h2 className="lg:text-3xl bg-emerald-600 p-4 rounded-2xl lg:shadow-md  lg:bg-emerald-600 py-5 font-bold mb-4">
        Query History ({queryCount})
      </h2>

      
      <ol className="text-left lg:bg-emerald-600  rounded-md list-decimal px-6 lg:shadow-md">
        {history.map((q, index) => (
          <li
            key={index}
            className="text-black w-full font-semibold py-1 lg:text-lg rounded-md  my-1"
          >
            {q}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default QueryHistory;
