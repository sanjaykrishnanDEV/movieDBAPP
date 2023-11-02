import React from "react";
import "../components/ScrollingMovies.css";
const ScrollingMovies = ({ data }) => {
  const details = data;
  //console.log(details);
  return (
    <div className="cardy">
      <img src={"https://image.tmdb.org/t/p/w500/" + details.poster_path} alt="sd"/>
        <p>{details.original_title}</p>
    </div>
  );
};

export default ScrollingMovies;
