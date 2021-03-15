//import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Main.css";

function Main({ data, onClick }) {
  //const id = "http://swapi.dev/api/people/3/".split("/")[5] ;
  return (
    <div className="main">
      {" "}
      <div className="row">
        {" "}
        {data.map((people, i) => {
          const id = people.url.split("/")[5];
          return (
            <div className="cards" key={i}>
              <Link to={`characters/${id}`}>
                <h2>{people.name}</h2>
              </Link>

              <ul>
                <li>
                  <span>{people.films_name}</span> Films
                </li>
                <li>
                  birth year:<span>{people.birth_year}</span>
                </li>
              </ul>
            </div>
          );
        })}
      </div>
      <div className="btn">
        <button className="button" onClick={onClick}>
          Load More
        </button>
      </div>
    </div>
  );
}

export default Main;
