import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./misc/Header";
import ProductBox from "./components/ProductBox";
import foods from "./data/foods.json";



class App extends Component {
  render() {
    return (
      <div>
        <Header />

        {foods.map(p => (<ProductBox {...foods}/>))}
      </div>

      
    );
  }
}

export default App;
