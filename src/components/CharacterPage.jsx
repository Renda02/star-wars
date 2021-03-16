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
    <div className="wrap">
      <div className="icons">
        <Link to="/">
          <BsArrowLeft fill="#FDE44D" size={40} />
        </Link>
      </div>
      <div className="info">
        {" "}
        <h1>{character.name}</h1>
        <div className="character__info">
          {" "}
          <ul>
            <li>
              Height:<span>{character.height}</span>
            </li>
            <li>
              Gender:<span>{character.gender}</span>
            </li>
            <li>
              Mass:<span>{character.mass}</span>kg{" "}
            </li>
            <li>
              Hair color:<span>{character.hair_color}</span>
            </li>
            <li>
              Eye color:<span>{character.eye_color}</span>
            </li>
            <li>
              Birth year:<span>{character.mass}</span>
            </li>
          </ul>
        </div>
      </div>

      <div>
        <h2>films</h2>
      </div>
    </div>
  );
}

export default CharacterPage;
