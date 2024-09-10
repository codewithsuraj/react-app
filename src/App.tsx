import { useState } from "react";
import "./App.css";

function App() {
  const [bugs, setBugs] = useState([
    { id: 1, title: "Bug 1", fixed: false },
    { id: 2, title: "Bug 2", fixed: false },
    { id: 3, title: "Bug 3", fixed: false },
  ]);

  const handleClick = () => {
    const updatedBugs = bugs.map((bug) =>
      bug.id === 1 ? { ...bug, fixed: !bug.fixed } : bug
    );
    setBugs(updatedBugs);
  };

  return (
    <div>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
