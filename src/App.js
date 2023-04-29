import React, { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import Characters from "./components/Characters.js";
import Character from "./components/Character.js";
import Header from "./components/Header";
import Comics from "./components/Comics";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  //const [characters, setCharacters] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [character, setCharacter] = useState([]);
  //const [page, setPage] = useState(1);
  const getData = async () => {
    console.log("The Get Data Function Has Been Called!!");
    console.log("Another time, I am going to console.log that the get Data function has been called!!");
    setIsLoading(true);
  };

  useEffect(() => {
    getData();
  });

  if (isLoading == true) {
    return (
      <div class="container">
        <Router>
          <Header />
          <Switch>
            <Route path="/characters">
              <Characters setCharacter={setCharacter} />
            </Route>
            <Route path="/character/:name">
              <Character character={character} />
            </Route>
            <Route path="/comics">
              <Comics />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  } else {
    return <h4> Data Loading...</h4>;
  }
}

export default App;
