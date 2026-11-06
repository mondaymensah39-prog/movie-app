export default function MovieCard({ movie }) {
  return (
    <article className="movie-card">
      <h3>{movie.Title}</h3>
      <p>{movie.Year} · {movie.Type}</p>
    </article>
  );
}