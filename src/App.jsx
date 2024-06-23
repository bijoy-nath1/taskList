import "./App.css";
import Home from "./componnents/Home";

// import { Children } from "react";
import { CartProvider } from "./context/CartContext";
function App() {
  return (
    <CartProvider>
      <Home />
    </CartProvider>
  );
}

export default App;
