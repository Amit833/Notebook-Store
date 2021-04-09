import React, { useContext } from "react";
import MyContext from "../context/MyContext";
import Myproducts from "./Myproducts";
import "../css/App.css";

const MainComponent = () => {
  const context = useContext(MyContext);
  const { data } = context;

  return (
    <main className="block col-2">
      <h2>Products</h2>

      <div className="row">
        {data.map((product) => {
          return <Myproducts product={product} />;
        })}
      </div>
    </main>
  );
};

export default MainComponent;
