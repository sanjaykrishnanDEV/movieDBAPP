import React from "react";
import "../components/Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <span>FlixNet</span>
      <ul>
        <li>
          <Link to="/movies" className="link">
            <p>Movies</p>
          </Link>
        </li>
        <li>
          <p>Tv Shows</p>
        </li>
      </ul>
    </div>
  );
};

export default Header;
