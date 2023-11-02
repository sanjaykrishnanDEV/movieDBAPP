import { Link } from 'react-router-dom';
import '../components/FiniteDetails.css'
import React, { useEffect, useState } from "react";
import Header from "./Header";
import { useParams } from "react-router-dom";
const FiniteDetails = () => {
  const { userId } = useParams();
  ;
    const[details,setDetails]= useState([]);
  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4ZWE2ODIzNzM3OTc4MmE1NmNmM2I0YjEyZDQwZjFkOSIsInN1YiI6IjY1MzcyNzRjYzUwYWQyMDBlYjJkYWFhMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.9Fjb3Htzd2i7hpHrxvhnCZPRLUrrB6rFwsjeZtY7RQ0",
      },
    };

    fetch(`https://api.themoviedb.org/3/movie/${userId}?language=en-US`, options)
      .then((response) => response.json())
      .then((response) => setDetails(()=>response))
      .catch((err) => console.error(err));
  }, []);
  console.log(details)
  return (
    <div>
      <Header />
      <div className='finite'>
      <Link to="/"><button type='submit'>Back to home</button></Link>
        <h1>{details?.title}</h1>
        <img src={"https://image.tmdb.org/t/p/w500/"+ details?.poster_path} alt="a"/>
        <div className='det'>
        <p>Language:{details.original_language}</p>
        <p>Overview:{details.overview}</p>
        <button>More Details:<a href={details.homepage}>{details.homepage}</a></button>
        </div>
      </div>

    </div>
  );
};

export default FiniteDetails;
