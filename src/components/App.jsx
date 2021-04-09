import React from "react";
import MyProvider from "../context/MyProvider";
import Header from "./Header";
import MainComponent from "./MainComponent";
import Basket from "./Basket";

const App = () => {
  return (
    <MyProvider>
      <div className="App">
        <Header />
        <div className="row">
          <MainComponent />
          <Basket />
        </div>
      </div>
    </MyProvider>
  );
};

export default App;
