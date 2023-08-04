import axios from "axios";

const App = () => {
  const fetch = () => {
    axios.get("/api/skills");
  };

  return (
    <div>
      <button onClick={fetch}>Fetch Skills Data!</button>
    </div>
  );
};

export default App;
