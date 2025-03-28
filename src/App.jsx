import QueryInput from "./components/QueryInput";
import QueryHistory from "./components/QueryHistory";
import Results from "./components/Results";

const App = () => {
  return (
    <div className="flex h-screen">
      <QueryHistory />
      <div className="flex-1 flex flex-col">
        <QueryInput />
        <Results />
      </div>
    </div>
  );
};

export default App;
