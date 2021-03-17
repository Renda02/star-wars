import React, { useState, useEffect } from "react";




function MovieLink({ link }) {
  const [movie, setMovie] = useState({});

  useEffect(() => {
    async function fetchData() {
      // 1. get the data
      const response = await fetch(
        link
      );
      // 2. prepare the data
      const data = await response.json();

      // 3. update the value of the state
      setMovie(data);
    }

    fetchData();
    // fetch data
    // set the events
  }, [link]);
  console.log(movie, "movie")
  return (
      

    <li>
      - {movie.title}: {new Date().getFullYear() - new Date(movie.release_date).getFullYear() + " years ago"}
    </li>
   
  );
}

export default MovieLink;
