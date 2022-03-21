
import MovieList from "./components/MovieList";
import NavBar from "./components/NavBar";
import { UserProvider } from "./contexts/UserContext";

function App() {

  return (
    <div className="App">
      <UserProvider>
        <NavBar />
        <MovieList />
      </UserProvider>
    </div>
  );
}

export default App;
