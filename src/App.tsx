import "./App.css";
import Like from "./components/Like/Like";
function App() {
  return (
    <div>
      <Like onClick={() => console.log("Clicked")} />
    </div>
  );
}

export default App;
