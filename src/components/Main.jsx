//import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { Container } from "../globalStyles";


function Main({ data, onClick }) {
  return (
    <Container>
      {" "}
      <Row>
        {" "}
        {data.map((people, i) => {
          const id = people.url.split("/")[5];
          return (
            <Cards key={i}>
              <StyledLink to={`characters/${id}`} key={people.id} data-cy={`link-character-${id}`} >
                <h2 data-testid={`name-${id}`} data-cy={"load-more-info"}>{people.name}</h2>
              </StyledLink>
              <div className="details">
                <LinkWrapper>
                  <List>{people.films.length} Films</List>

                  <List>
                    birth year:<span>{people.birth_year}</span>
                  </List>
                </LinkWrapper>
              </div>
            </Cards>
          );
        })}
      </Row>
      <ButtonWrapper>
        <Button onClick={onClick} data-cy={"load-more-button"}>Load More</Button>
      </ButtonWrapper>
    </Container>
  );
}

export default Main;

const Row = styled.div`
  display: grid;
  grid-template-columns: 300px 300px 300px;
  grid-gap: 50px;
  justify-content: center;
  align-items: center;

  @media (max-width: 920px) {
    display: grid;
    grid-template-columns: 300px;
    grid-gap: 10px;
  }
`;

const Cards = styled.div`
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: hidden;
  background: rgba(61, 67, 72, 0.5);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
  border-top: rgba(255, 255, 255, 0.2);
  border-left: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(5px);
`;

const StyledLink = styled(Link)`
  text-underline-position: under;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: underline solid #fde44d;
  }
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  color: #fde44d;
`;

const LinkWrapper = styled.ul`
  list-style: none;
  display: flex;
`;

const List = styled.li`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  font-weight: 600;
  
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2em;
`;

const Button = styled.button`
  border-radius: 5px;
  padding: 1em 2.2em;
  background: #fde44d;
  color: #000;
  cursor: pointer;

  &:hover {
    background: #f1f1f1;
  }
`;
