import "./App.css";
import Button from "./components/Button/Button";
function App() {
  return (
    <div>
      <Button children={"My Button"} onClick={() => console.log("Clicked")} />
    </div>
  );
}

export default App;
