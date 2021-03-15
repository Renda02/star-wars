import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import "./CharacterPage.css";

function CharacterPage() {
  const [character, setCharacter] = useState({});

  let { characterId } = useParams();

  useEffect(() => {
    async function fetchData() {
      // 1. get the data
      const response = await fetch(
        `http://swapi.dev/api/people/${characterId}`
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
      <div className="icons">
        <Link to="/">
          <BsArrowLeft fill="#FDE44D" size={40} />
        </Link>
      </div>
      <h1>{character.name}</h1>
      <ul>
        <li>Height:{character.height}</li>
        <li>Mass:{character.mass}</li>
      </ul>
    </div>
  );
}

export default CharacterPage;
