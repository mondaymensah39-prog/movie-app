export default function FilterControls({
  typeFilter,
  sortOrder,
  onTypeChange,
  onSortChange,
}) {
  return (
    <div className="controls">
      <label>
        Type:
        <select
          value={typeFilter}
          onChange={(event) => onTypeChange(event.target.value)}
        >
          <option value="all">All</option>
          <option value="movie">Movies</option>
          <option value="series">Series</option>
        </select>
      </label>

      <label>
        Sort by:
        <select
          value={sortOrder}
          onChange={(event) => onSortChange(event.target.value)}
        >
          <option value="default">Default</option>
          <option value="title-asc">Title (A–Z)</option>
          <option value="year-desc">Year (newest first)</option>
        </select>
      </label>
    </div>
  );
}