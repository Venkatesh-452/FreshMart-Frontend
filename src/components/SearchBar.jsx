import './SearchBar.css'

export default function SearchBar({ search, setSearch }) {
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search vegetables..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="button">🔍 Search</button>
    </div>
  )
}