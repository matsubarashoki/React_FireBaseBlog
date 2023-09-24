import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faFilePen,
  faArrowRightToBracket,
} from "@fortawesome/free-solid-svg-icons";

export const NavBar = () => {
  return (
    <nav>
      <Link to="/">
        <FontAwesomeIcon icon={faHouse} />
        Home
      </Link>
      <Link to="/CreatePots">
        <FontAwesomeIcon icon={faFilePen} />
        記事投稿
      </Link>
      <Link to="/login">
        <FontAwesomeIcon icon={faArrowRightToBracket} />
        Login
      </Link>
    </nav>
  );
};
