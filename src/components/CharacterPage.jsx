import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { BsArrowLeft } from "react-icons/bs";

import MovieLink from "./MovieLink";
import styled from "styled-components";
import { Container } from "../globalStyles";

function CharacterPage({ data }) {
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
  }, [characterId]);

  return (
    <Container>
      <Icon>
        <Link to="/">
          <BsArrowLeft fill="#FDE44D" size={50} />
        </Link>
      </Icon>
      <div className="info">
        {" "}
        <Heading>{character.name}</Heading>
        <CharacterInfo>
          {" "}
          <CharacterListWrapper>
            <CharacterList>
              Height:<span>{character.height}</span>
            </CharacterList>
            <CharacterList>
              Gender:<span>{character.gender}</span>
            </CharacterList>
            <CharacterList>
              Mass:<span>{character.mass}</span>kg{" "}
            </CharacterList>
            <CharacterList>
              Hair color:<span>{character.hair_color}</span>
            </CharacterList>
            <CharacterList>
              Eye color:<span>{character.eye_color}</span>
            </CharacterList>
            <CharacterList>
              Birth year:<span>{character.mass}</span>
            </CharacterList>
          </CharacterListWrapper>
        </CharacterInfo>
      </div>

      <div>
        <FilmInfo>
          <Title>
            {/*{data.reduce((sum, character) => sum + character.films.length, 0)}*/}
            {character.films && character.films.length} Films
          </Title>
          <MovieList>
            {character.films &&
              character.films.map((filmLink) => <MovieLink link={filmLink} />)}
          </MovieList>
        </FilmInfo>
      </div>
    </Container>
  );
}

export default CharacterPage;

const CharacterInfo = styled.div`
  margin: 0 2em;
  display: flex;
  justify-content: center;
  overflow: hidden;
  background: rgba(225, 225, 225, 0.05);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  border-top: rgba(255, 255, 255, 0.2);
  border-left: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
`;

const Icon = styled.div`
  margin: 1rem 0 0;
`;

const Heading = styled.h1`
  text-align: left;
  padding-left: 2rem;
  font-size: 1.6rem;
`;

const CharacterListWrapper = styled.ul` display: flex;
list-style: none;
text-align: center;
align-items:flex-start;
flex-wrap: wrap;
justify-content: space-between;

@media (max-width: 920px) {
  flex-direction:column}

`;

const CharacterList = styled.li`
  justify-content: center;
  align-items: center;
  display: flex;
  margin: 1em;

  padding-right: 3rem;
  font-size: 1.2rem;
`;

const FilmInfo = styled.div`
  margin: 1em;
`;

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
  padding-left: 2rem;
  font-size: 1.2rem;
`;
