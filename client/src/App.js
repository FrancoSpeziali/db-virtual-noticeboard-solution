import Notices from "./components/Notices";
import Actions from "./components/Actions";

import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Virtual Noticeboard</h1>
      <Notices />
      <Actions />
    </div>
  );
}

export default App;
