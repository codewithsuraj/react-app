import ListGroup from "./components/ListGroup";
import "./App.css";
function App() {
  return (
    <div>
      <ListGroup
        items={["New York", "Los Angeles", "San Francisco"]}
        heading={"Miami"}
        onSelectItem={(item) => console.log(item)}
      />
    </div>
  );
}

export default App;
