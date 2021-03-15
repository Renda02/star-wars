import React, { useState, useEffect } from "react";
import {useParams, Link} from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

function CharacterPage() {
const [character,setCharacter]=useState({});

let {characterId}=useParams();

useEffect(() => {
    async function fetchData() {
      // 1. get the data
      const response = await fetch(
        `http://swapi.dev/api/people/characters/${characterId}`
      );
      // 2. prepare the data
      const data = await response.json();

      // 3. update the value of the state
      setCharacter(data);
    }

    fetchData();
    // fetch data
    // set the events
  }, []);



  return (
    <div>
        <div><Link to="/"><BsArrowLeft fill="#FDE44D"/></Link></div>
        <h1>{character.name}</h1>
        
     
      
    </div>
  );
}

export default CharacterPage;
