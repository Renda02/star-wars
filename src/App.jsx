import React, { useState, useEffect } from "react";
import './App.css';
import NavBar from "./components/NavBar";
import Main from "./components/Main"

function App() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let res = await fetch("http://swapi.dev/api/people/?format=json");
      let data = await res.json();
      setPeople(data.results);
    }
    fetchData();
  }, []);

  console.log("data", people);
  return (
    <div>
      <NavBar />
      <Main people={people}/>
    </div>
  );
}

export default App;
