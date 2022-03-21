import React, { createContext, useState } from "react";

const UserContext = createContext();

const initialUser = {
  nombre: "Andres",
  id: 1,
  favoriteMovies: [1, 2],
};
const UserProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const login = () => {
    setUser(initialUser);
  };
  const logout = () => {
    setUser(null);
  };
  const data = {
    user,
    login,
    logout,
  };
  return <UserContext.Provider value={data}>{children}</UserContext.Provider>;
};
export { UserProvider };
export default UserContext;
