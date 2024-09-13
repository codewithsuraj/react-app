import { useEffect } from "react";
import "./App.css";

function App() {
  const connect = () => console.log("Connecting");
  const disConnect = () => console.log("Disconnecting");

  useEffect(() => {
    document.title = "My App";
    connect();

    return () => {
      disConnect();
    };
  });
  return <div></div>;
}

export default App;
