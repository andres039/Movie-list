import React, { createContext, useState } from "react";

const UserContext = createContext();

const initialUser = {
  nombre: "Andres",
  id: 1,
  favoriteMovies: [1, 2, 5],
};
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(initialUser);
  const login = () => {
    setUser(initialUser);
  };
  const logout = () => {
    setUser(null);
  };
  const toggleFavouriteMovieToUser = movieId => {
    const favorites = user.favoriteMovies.includes(movieId)
    const favoriteMovies = favorites ? user.favoriteMovies.filter(id => id !== movieId) : [...user.favoriteMovies, movieId]
    setUser({...user, favoriteMovies})
  }
    const data = {
    user,
    login,
    logout,
    toggleFavouriteMovieToUser
  };
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};
export { UserProvider };
export default UserContext;
