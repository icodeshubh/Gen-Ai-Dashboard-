import { useState } from "react";
import { useDispatch } from "react-redux";
import { setQuery, fetchQueryResults } from "../../redux/querySlice";

const suggestions = ["Analyze sales data", "Show customer trends", "Revenue prediction"];

const QueryInput = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = () => {
    if (!input.trim()) return;
    dispatch(setQuery(input));
    dispatch(fetchQueryResults(input));
    setInput("");
  };

  return (
    <div className="p-4  flex gap-2 ">
      <input
        type="text"
        placeholder="Ask AI..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="border-[0.5px] p-2 flex-1 rounded-2xl"
      />
      <button onClick={handleSubmit} className="bg-amber-300 rounded-4xl hover:bg-amber-500 text-white px-4 py-2">
        Search
      </button>
    </div>
  );
};

export default QueryInput;
