import React, { useContext } from "react";
import UserContext from "../contexts/UserContext";

const Movie = ({ movie }) => {
  const { toggleFavouriteMovieToUser } = useContext(UserContext);
  const imgStyles = { height: "360px", objectFit: "cover" };

  const isFavorite = true;

  return (
    <div className="card">
      <img
        src={movie.imageUrl}
        alt={movie.title}
        className="card img-top"
        style={imgStyles}
      />
      <div className="card-body">
        <h4>{movie.title}</h4>
        <button
          onClick={toggleFavouriteMovieToUser}
          className={`btn ${
            isFavorite ? "btn-success" : "btn-outline-primary"
          }`}
        >
          Favorito
        </button>
      </div>
    </div>
  );
};

export default Movie;
