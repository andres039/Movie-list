import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";
import { UserProvider } from "./contexts/UserContext";
import { MoviesProvider } from "./contexts/MoviesContext";
function App() {
  return (
    <div className="App">
      <UserProvider>
        <MoviesProvider>
          <NavBar />
          <MovieList />
        </MoviesProvider> 
      </UserProvider>
    </div>
  );
}

export default App;
