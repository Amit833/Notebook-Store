import React, { useContext } from "react";
import MyContext from "../context/MyContext";

const Header = () => {
  const context = useContext(MyContext);
  const { countCartItems } = context;
  return (
    <header className="row block center">
      <div>
        <h1>My Shopping Cart</h1>
      </div>

      <div>
        <h2>
          Cart{" "}
          {countCartItems ? (
            <button className="badge">{countCartItems}</button>
          ) : (
            " "
          )}
        </h2>
      </div>
    </header>
  );
};

export default Header;
