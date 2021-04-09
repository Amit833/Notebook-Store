import React, { useContext } from "react";
import MyContext from "../context/MyContext";
import "../css/App.css";

const Myproducts = ({ product }) => {
  const context = useContext(MyContext);
  const { data, onAdd } = context;

  return (
    <div>
      <img className="small" src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <div>Price:{product.price}$</div>

      <div>
        <button onClick={() => onAdd(product)}>Add to Cart</button>
      </div>
    </div>
  );
};

export default Myproducts;
