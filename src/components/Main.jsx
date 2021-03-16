//import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Main.css";

function Main({ data, onClick }) {
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
              <div className="details">
                <ul>
                  <li>
                    <span> {people.films.length} Films</span> 
                  </li>

                  <li className="list_birth">
                    birth year:<span>{people.birth_year}</span>
                  </li>
                </ul>
              </div>
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
