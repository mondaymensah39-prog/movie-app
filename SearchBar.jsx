export default function SearchBar({ value, onChange, onSubmit }) {
  function handleSubmit(event) {
    event.preventDefault();
    onSubmit();
  }

  return (
    <form id="search-form" onSubmit={handleSubmit} className="search-bar">
      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search for a movie..."
      />
      <button type="submit">Search</button>
    </form>
  );
}