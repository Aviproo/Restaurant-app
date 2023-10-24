import React from "react";
const CartContext = React.createContext({
  items: [100, 10],
  totalAmount: 10,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
