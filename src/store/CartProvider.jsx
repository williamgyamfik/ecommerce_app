import cartContext from "../store/Cart-context";
import { useReducer } from "react";

const defaultState = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD") {
    const updatedTotalAmount =
      state.totalAmount + action.item.price * action.item.quantity;

    const cartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[cartItemIndex];
    //returns the index where the element was found
    // so if the same element with the same id was found at different indexes,
    // all the indexes will be returned

    let updatedItems;
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        quantity: existingCartItem.quantity + action.item.quantity,
        amount: existingCartItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];
      updatedItems[cartItemIndex] = updatedItem;
      console.log(updatedItems);
    } else {
      updatedItems = state.items.concat(action.item);
    }

    //concat method creates a new array

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
    //context is an object
    // item is added to the object as an array from form input
  };

  const removeItemHandler = (id) => {
    dispatch({ type: "REMOVE", id: id }); //add id to the items array
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
