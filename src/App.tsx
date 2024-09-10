import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Cart from "./components/Cart/Cart";

function App() {
  const [cartItems, setCartItems] = useState([
    "Product 1",
    "Product 2",
    "Product 3",
  ]);

  const handleClear = () => setCartItems([]);

  return (
    <div>
      <NavBar cartItemsCount={cartItems.length} />
      <Cart cartItems={cartItems} onClear={handleClear} />
    </div>
  );
}

export default App;
