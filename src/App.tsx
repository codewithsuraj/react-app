import { useState } from "react";
import "./App.css";

function App() {
  const [customer, setCustomer] = useState({
    name: "John",
    address: {
      street: "123 Main St",
      city: "New York",
      state: "NY",
    },
  });

  const handleClick = () => {
    setCustomer({
      ...customer,
      address: {
        ...customer.address,
        city: "New York 3",
      },
    });
  };

  return (
    <div>
      {customer.address.city}
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
