//import React, { useState } from "react";
import "./Main.css";

function Main({ data, onClick }) {


  return (
    <div className="main">
      {" "}
      <div className="row">
        {" "}
        {data.map((people, i) => {
          return (
            <div className="cards" key={i}>
              <h2>name:{people.name}</h2>

            </div>
          );
        })}
      </div>
      <div className="btn">
        <button className="button" onClick={onClick}>Load More</button>
      </div>
    </div>
  );
}

export default Main;
