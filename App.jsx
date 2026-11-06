
import { useState } from "react";
import SearchBar from "./components/SearchBar";
import MovieCard from "./components/MovieCard";
import FilterControls from "./components/FilterControls";
import { searchMovies } from "./api";
import { filterByType, sortMovies } from "./filter";

function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [status, setStatus] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [typeFilter, setTypeFilter] = useState("all");
  const [sortOrder, setSortOrder] = useState("default");

  async function handleSearch() {
    const term = query.trim();
    if (!term) return;

    setIsLoading(true);
    setStatus("Loading...");
    setMovies([]);

    try {
      const results = await searchMovies(term);
      setMovies(results);
      setStatus(`Found ${results.length} results`);
    } catch (error) {
      setStatus(error.message);
    } finally {
      setIsLoading(false);
    }
  }

  // Not state: recalculated on every redraw from the current movies and dropdown choices
  const visibleMovies = sortMovies(filterByType(movies, typeFilter), sortOrder);

  return (
    <div>
      <h1>Movie App</h1>

      <SearchBar
        value={query}
        onChange={setQuery}
        onSubmit={handleSearch}
      />

      <FilterControls
        typeFilter={typeFilter}
        sortOrder={sortOrder}
        onTypeChange={setTypeFilter}
        onSortChange={setSortOrder}
      />

      <p className="status">{status}</p>

      <div id="results">
        {visibleMovies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default App;