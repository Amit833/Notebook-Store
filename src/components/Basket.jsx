import React, { useContext } from "react";
import MyContext from "../context/MyContext";
import "../css/App.css";

const Basket = () => {
  const context = useContext(MyContext);
  const { cartItems, onAdd, onRemove } = context;

  const itemsPrice = cartItems.reduce(
    (accumulator, current) => accumulator + current.price * current.qty,
    0
  );
  const shippingPrice = itemsPrice > 2000 ? 0 : 50;
  const totalPrice = itemsPrice + shippingPrice;

  return (
    <aside className="block col-1">
      <h2>Cart Items</h2>
      <div>{cartItems.length === 0 && <div>Cart is Empty </div>}</div>

      {cartItems.map((item) => {
        return (
          <div key={item.id} className="row">
            <div className="col-2">{item.name}</div>

            <div className="col-2">
              <button onClick={() => onAdd(item)} className="add">
                +
              </button>

              <button onClick={() => onRemove(item)} className="remove">
                -
              </button>
            </div>

            <div className="col-2 text-right">
              {item.qty} x {item.price.toFixed(2)}$
            </div>
          </div>
        );
      })}

      <hr />

      {cartItems.length !== 0 && (
        <>
          <div className="row">
            <div className="col-2">Items Price:</div>
            <div className="col-1 text-right">{itemsPrice.toFixed(2)}$</div>
          </div>

          <div className="row">
            <div className="col-2">Shipping Price:</div>
            <div className="col-1 text-right">{shippingPrice.toFixed(2)}$</div>
          </div>

          <div className="row">
            <div className="col-2">
              <strong>Total Price:</strong>
            </div>
            <div className="col-1 text-right">{totalPrice.toFixed(2)}$</div>
          </div>

          <div className="row checkout">
            <button onClick={() => alert("Implement Checkout")}>
              Checkout
            </button>
          </div>
        </>
      )}
    </aside>
  );
};

export default Basket;
