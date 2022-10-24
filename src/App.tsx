import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/header";
import { Pointing } from "./components/pointing";
import { Items } from "./components/items";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Pointing></Pointing>
      <Items></Items>
      <main className="main"></main>
    </div>
  );
}

export default App;
