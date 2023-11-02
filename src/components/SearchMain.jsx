import { useEffect, useState } from "react";
import {Link} from 'react-router-dom'
import "../components/SearchMain.css";
function SearchMain() {
  const [search, setSearch] = useState("");
  const [movieData, setMovieData] = useState([]);
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
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      options
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieData(() => data.results);
      })
      .catch((err) => console.log(err));
  }, []);
  // console.log(movieData);
  //

  return (
    <div className="main">
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <input type="radio" checked="true"/>
          <label>Movies</label>
          <input type="radio" />
          <label>TV shows </label>
        </div>
        <input
          type="text"
          name="input"
          id="inputname"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
          type="submit"
          onClick={() => {
            //console.log(search);
            setMovieData(() => {
              const options = {
                method: "GET",
                headers: {
                  accept: "application/json",
                  Authorization:
                    "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWE2ODIzNzM3OTc4MmE1NmNmM2I0YjEyZDQwZjFkOSIsInN1YiI6IjY1MzcyNzRjYzUwYWQyMDBlYjJkYWFhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9Fjb3Htzd2i7hpHrxvhnCZPRLUrrB6rFwsjeZtY7RQ0",
                },
              };

              fetch(
                `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=1`,
                options
              )
                .then((res) => res.json())
                .then((r) => setMovieData(r.results))
                // .then(() => console.log(movieData))
                .catch((err) => console.log(err));
            });
          }}
        >
          Search
        </button>
      </form>
      <DisplayArea movieData={movieData} />
    </div>
  );
}

export default SearchMain;

function DisplayArea({ movieData }) {
  // console.log()

  return (
    <div className="displayarea">
      {movieData
        ? movieData.map((movie) => <Cards movie={movie} key={movie.id} />)
        : "Please Wait::"}
    </div>
  );
}

function Cards({ movie }) {
  return (
    <div className="card">
      <Link to={`/details/${movie?.id}`}>
      <img
        src={"https://image.tmdb.org/t/p/w500/" + movie.poster_path}
        alt="s"
      />
      <p>{movie.title}</p>
      </Link>
    </div>
  );
}
