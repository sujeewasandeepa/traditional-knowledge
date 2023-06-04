import "../assets/SearchBar.css";

export default function SearchBox () {
  return (
  <>
      <div className="has-text-centered">
        <input 
          type="text"
          className="input mt-5"
          id="searchBox"
          placeholder="Search"
        />
      </div>
  </>
  )
}
