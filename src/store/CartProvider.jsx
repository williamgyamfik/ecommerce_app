import cartContext from "../store/Cart-context";
import { useReducer } from "react";

const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.amount;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return defaultState;
};

const CartProvider = (props) => {
  const [cartState, dispatch] = useReducer(cartReducer, defaultState);

  const addItemHandler = (item) => {
    dispatch({ type: "ADD", item: item });
  };

  const removeItemHandler = (id) => {
    dispatch({ type: "REMOVE", id: id });
  };

  const cartContextData = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };

  return (
    <cartContext.Provider value={cartContextData}>
      {props.children}
    </cartContext.Provider>
  );
};

export default CartProvider;
