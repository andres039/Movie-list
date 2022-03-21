import React, { createContext } from "react";
import initialMovies from "../components/Consts/movies";

const MoviesContext = createContext();

const MoviesProvider = ({children}) => {
  const data = { movies: initialMovies }
  return <MoviesContext.Provider value={data}>{children}</MoviesContext.Provider>;
};
export { MoviesContext, MoviesProvider };
