import { useState } from "react";
import "./App.css";

function App() {
  const [isVisible, setVisible] = useState(false);
  const [isApproved, setApproved] = useState(true);

  const handleClick = () => {
    setVisible(true);
    console.log(isVisible);
  };

  return (
    <div>
      <button onClick={handleClick}>Show</button>
    </div>
  );
}

export default App;
