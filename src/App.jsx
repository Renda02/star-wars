import React, { useState, useEffect } from "react";
import './App.css';
import NavBar from "./components/NavBar";
import Main from "./components/Main"

function App() {
  const [people, setPeople] = useState([]);
  const [next, setNext] = useState("");

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch("http://swapi.dev/api/people/");
      let data = await res.json();
      setPeople(data.results);
      setNext(data.next)
    }
    fetchPeople();
  }, []);


  async function onClick(event){
    event.preventDefault()
    let res = await fetch(next);
    let data = await res.json();
    setPeople([
      ...people,
      ...data.results
    ]);
    // updates the next page
    setNext(data.next)
  }

  console.log("data", people);
  return (
    <div>
      <NavBar />
      <Main data={people} onClick={onClick}/>
    </div>
  );
}

export default App;
