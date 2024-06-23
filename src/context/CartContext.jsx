import { useState } from "react";
import PropTypes from "prop-types";
import { createContext } from "react";
//here i have created cart context for my cart data
export const CartContext = createContext(null);
// here i have created cart context prvider which means it will make cart context able to get data from any component set data to anu component
export const CartProvider = (props) => {
  const [todoData, settodoData] = useState(["add your tasks"]);
  return (
    <CartContext.Provider value={{ todoData, settodoData }}>
      {props.children}
    </CartContext.Provider>
  );
};

// this is setting the prop type of my prop child
CartProvider.propTypes = {
  children: PropTypes.node,
};
