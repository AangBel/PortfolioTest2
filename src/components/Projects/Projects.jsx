import React from "react";

import SQL_to_do_list from "../Images/SQL_to_do_list .gif";
import movie_database_giphy from "../Images/movie_database_giphy.gif";
import rutinaAdobeLg from "../Images/rutinaAdobeLg.gif";
import galleryAdobeLg from "../Images/galleryAdobeLg.gif";

import './Projects.css';

export default function Projects() {
  const handleMovieClick = () => {
    window.location.href =
      "https://sleepy-chamber-76088-97ff43ff0d89.herokuapp.com/#/";
  };

  const handleListClick = () => {
    window.location.href =
      "https://mighty-everglades-74307-7a77b374e016.herokuapp.com/";
  };

  const handleRutinaClick = () => {
    window.location.href =
      "https://infinite-island-02934-33c7137ddfa8.herokuapp.com/#/registration";
  };

  const handleGalleryClick = () => {
    window.location.href =
      "https://serene-temple-74437-4aaf51e2ae87.herokuapp.com/";
  };

  return (
    <>
      <div className="rutinaDiv">
        <img src={rutinaAdobeLg}></img>
        <p>
          Rutina is my full stack application created over a two week run.
          Rutina is a task management application that uses PostgreSQL, React,
          Node.js, Express, Day.js and Sweet Alerts.
        </p>
        <button
          onClick={handleRutinaClick}
          className="btn bg-accent border-2 border-[#ADDEDC] text-white px-6 py-3 hover:bg-transparent hover:text-accent"
        >
          Click Here to be directed to this deployed project
        </button>
      </div>

      <br></br>

      <br></br>

      <div className="movieDiv">
        <img src={movie_database_giphy}></img>
        <p>
          2 day sprint- In the Movie Sagas project we practiced using React
          redux and sagas and expanded upon our knowledge of SQL in order to
          create a database for a movie collection.{" "}
        </p>
        <button
          onClick={handleMovieClick}
          className="btn bg-accent border-2 border-[#ADDEDC] text-white px-6 py-3 hover:bg-transparent hover:text-accent"
        >
          Click Here to be directed to this deployed project
        </button>
      </div>

      <br></br>

      <br></br>
      <div className="listDiv">
        <img src={SQL_to_do_list}></img>
        <p>
          2 day sprint- In the SQL to do list we practiced SQL by building a
          full stack application. This to do list saves tasks to the Neon
          database.{" "}
        </p>

        <button
          onClick={handleListClick}
          className="btn bg-accent border-2 border-[#ADDEDC] text-white px-6 py-3 hover:bg-transparent hover:text-accent"
        >
          Click Here to be directed to this deployed project
        </button>
      </div>
      <br></br>

      <br></br>
      <div className="galleryDiv">
        <img src={galleryAdobeLg}></img>
        <p>2 day sprint- This gallery uses React. </p>

        <button
          onClick={handleGalleryClick}
          className="btn bg-accent border-2 border-[#ADDEDC] text-white px-6 py-3 hover:bg-transparent hover:text-accent"
        >
          Click Here to be directed to this deployed project
        </button>
      </div>
    </>
  );
}
