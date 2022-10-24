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
      <main className="main">
        <ul className="gentlemen">
          <li className="gentleman">
            <div className="gentleman__avatar-container">
              <img
                className="gentleman__avatar"
                src="../assets/fary.jpg"
                alt="The Fary pointing at you"
              />
              <span className="gentleman__initial">F</span>
            </div>
            <div className="gentleman__data-container">
              <h2 className="gentleman__name">The Fary</h2>
              <ul className="gentleman__data-list">
                <li className="gentleman__data">
                  <span className="gentleman__data-label">Profession:</span>
                  Influencer
                </li>
                <li className="gentleman__data">
                  <span className="gentleman__data-label">Status:</span> RIP
                </li>
                <li className="gentleman__data">
                  <span className="gentleman__data-label">Twitter:</span>{" "}
                  Pending
                </li>
              </ul>
            </div>
            <i className="icon gentleman__icon fas fa-check"></i>
            <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
          </li>
          <li className="gentleman">
            <div className="gentleman__avatar-container">
              <img
                className="gentleman__avatar"
                src="../assets/Julio.jpg"
                alt="Julius Churchs pointing at you"
              />
              <span className="gentleman__initial">J</span>
            </div>
            <div className="gentleman__data-container">
              <h2 className="gentleman__name">Julius Churchs</h2>
              <ul className="gentleman__data-list">
                <li className="gentleman__data">
                  <span className="gentleman__data-label">Profession:</span>
                  Youtuber
                </li>
                <li className="gentleman__data">
                  <span className="gentleman__data-label">Status:</span> Alive
                </li>
                <li className="gentleman__data">
                  <span className="gentleman__data-label">Twitter:</span>
                  @julius_churchs
                </li>
              </ul>
            </div>
            <i className="icon gentleman__icon fas fa-check"></i>
            <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
          </li>
          <li className="gentleman">
            <div className="gentleman__avatar-container">
              <img
                className="gentleman__avatar"
                src="../assets/bertin.jpg"
                alt="Bertin Osbourne pointing at you"
              />
              <span className="gentleman__initial">B</span>
            </div>
            <div className="gentleman__data-container">
              <h2 className="gentleman__name">Bertin Osbourne</h2>
              <ul className="gentleman__data-list">
                <li className="gentleman__data">
                  <span className="gentleman__data-label">Profession:</span>
                  Java developer
                </li>
                <li className="gentleman__data">
                  <span className="gentleman__data-label">Status:</span> Alive
                </li>
                <li className="gentleman__data">
                  <span className="gentleman__data-label">Twitter:</span>{" "}
                  @osbourne
                </li>
              </ul>
            </div>
            <i className="icon gentleman__icon fas fa-check"></i>
            <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
