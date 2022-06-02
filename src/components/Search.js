import { useContext } from "react";
import { AppContext } from '../context';

const Search = () => {
  const { setSearch } = useContext(AppContext)
  return (
    <input
      type="search"
      onChange={(e) => setSearch(e.target.value)}
    />
  )
}

export default Search;
