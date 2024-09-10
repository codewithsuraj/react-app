import { useState } from "react";
import "./App.css";

function App() {
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const fullName = firstName + " " + lastName;
  const [person, setPerson] = useState({
    firstName: "",
    lastName: "",
  });

  return <div>{person.firstName}</div>;
}

export default App;
