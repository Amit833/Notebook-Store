import React, { useState } from "react";
import MyContext from "./MyContext";
import Mydata from "../data/Mydata";

const MyProvider = (props) => {
  const [data, setData] = useState(Mydata);
  const [cartItems, setCartItems] = useState([]);
  const countCartItems = cartItems.length;

  const onAdd = (Clickedproducts) => {
    const exist = cartItems.find((itm) => itm.id === Clickedproducts.id);
    console.log("exist=", exist);

    if (!exist) {
      setCartItems([...cartItems, { ...Clickedproducts, qty: 1 }]);
    } else {
      setCartItems(
        cartItems.map((itm) =>
          itm.id === Clickedproducts.id ? { ...exist, qty: exist.qty + 1 } : itm
        )
      );
    }
  };

  const onRemove = (Clickedproducts) => {
    const exist = cartItems.find((itm) => itm.id === Clickedproducts.id);

    if (exist.qty === 1) {
      setCartItems(cartItems.filter((itm) => itm.id !== Clickedproducts.id));
    } else {
      setCartItems(
        cartItems.map((itm) =>
          itm.id === Clickedproducts.id ? { ...exist, qty: exist.qty - 1 } : itm
        )
      );
    }
  };

  return (
    <MyContext.Provider
      value={{
        data,
        setData,
        cartItems,
        setCartItems,
        onAdd,
        onRemove,
        countCartItems,
      }}
    >
      {props.children}
    </MyContext.Provider>
  );
};

export default MyProvider;
