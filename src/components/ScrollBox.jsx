import React, { useEffect, useState } from "react";
import "../components/ScrollBox.css";
import ScrollingMovies from "../components/ScrollingMovies";
const ScrollBox = () => {
  const [currentShows, setCurrentShows] = useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWE2ODIzNzM3OTc4MmE1NmNmM2I0YjEyZDQwZjFkOSIsInN1YiI6IjY1MzcyNzRjYzUwYWQyMDBlYjJkYWFhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9Fjb3Htzd2i7hpHrxvhnCZPRLUrrB6rFwsjeZtY7RQ0",
      },
    };

    fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      options
    )
      .then((response) => response.json())
      .then((response) => {
        setCurrentShows(() => response.results);
        //console.log(response.results);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="heros">
      <ScrollingMovies data={currentShows[0]}/>
      <ScrollingMovies data={currentShows[1]}/>
      <ScrollingMovies data={currentShows[2]}/>
      <ScrollingMovies data={currentShows[3]}/>
    </div>
  );
};

export default ScrollBox;
