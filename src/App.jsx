import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./components/NavBar";
import Main from "./components/Main";
import CharacterPage from "./components/CharacterPage";

function App() {
  const [people, setPeople] = useState([]);
  const [next, setNext] = useState("");

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch("http://swapi.dev/api/people/");
      let data = await res.json();
      setPeople(data.results);
      setNext(data.next);
    }
    fetchPeople();
  }, []);

  async function onClick(event) {
    event.preventDefault();
    let res = await fetch(next);
    let data = await res.json();
    setPeople([...people, ...data.results]);
    // updates the next page
    setNext(data.next);
  }

  //console.log("data", people);
  return (
    <Router>
      <NavBar />
      <Switch>
        {" "}
        <Route path={`/characters/:characterId`}>
          <CharacterPage />
        </Route>
        <Route path="/">
          {" "}
          <Main data={people} onClick={onClick} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
