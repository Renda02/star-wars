import React, { useState, useEffect } from "react";
import './App.css';
import NavBar from "./components/NavBar";
import Main from "./components/Main"

function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch("http://swapi.dev/api/people/");
      let data = await res.json();
      setPeople(data.results);
    }
    fetchPeople();
  }, []);

  console.log("data", people);
  return (
    <div>
      <NavBar />
      <Main data={people}/>
    </div>
  );
}

export default App;
