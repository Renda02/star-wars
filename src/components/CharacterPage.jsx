import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";
import MovieLink from "./MovieLink";
import "./CharacterPage.css";
import styled from "styled-components";

function CharacterPage({ data }) {
  const [character, setCharacter] = useState({});

  let { characterId } = useParams();
  console.log(character);
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
  }, [characterId]);

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
        <div className="films__info">
          <Title>
            {/*{data.reduce((sum, character) => sum + character.films.length, 0)}*/}
            {character.films && character.films.length} Films
          </Title>
          <MovieList>
            {character.films &&
              character.films.map((filmLink) => <MovieLink link={filmLink} />)}
          </MovieList>
        </div>
      </div>
    </div>
  );
}

export default CharacterPage;

const MovieList = styled.ul`
  display: flex;
  flex-direction: column;
  list-style: none;
  text-align: center;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const Title = styled.h2`
  text-align: left;
  padding:2rem;
`;
