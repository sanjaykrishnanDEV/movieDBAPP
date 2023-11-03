import { Link } from "react-router-dom";
import React from "react";
import "../components/ScrollingMovies.css";
const ScrollingMovies = ({ data }) => {
  const details = data;
  return (
    <div className="cardy">
      <Link to={`/details/${data?.id}`} className="link">
        <img
          src={"https://image.tmdb.org/t/p/w500/" + details?.poster_path}
          alt="sd"
        />
        <p>{details?.original_title}</p>
      </Link>
    </div>
  );
};

export default ScrollingMovies;
