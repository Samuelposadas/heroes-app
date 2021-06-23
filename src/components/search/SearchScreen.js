import { useLocation } from "react-router-dom";
import useForm from "../../hooks/useForm";
import HeroeCard from "../heroes/HeroeCard";
import getHeroesByName from "../../selectors/getHeroesByName";
import {useMemo} from "react"

import queryString from "query-string"

const SearchScreen = ({ history }) => {
  const location = useLocation();
  const {query = ""} = queryString.parse(location.search)

  const [formValues, handleInputChange] = useForm({
    searchText: query,
  });

  const { searchText } = formValues;

  const heroesFiltered = useMemo(() => getHeroesByName(query), [query])




  const handleSearch = (e) => {
    e.preventDefault();
    history.push(`?query=${searchText}`);
  };

  return (
    <div>
      <h1>SearchScreen</h1>
      <hr />

      <div className="row">
        <div className="col-md-5">
          <h4>Search Form</h4>
          <hr />

          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="find your heroe"
              className="form-control"
              name="searchText"
              value={searchText}
              onChange={handleInputChange}
            />

            <button type="submit" className="btn btn-primary mt-3">
              search...
            </button>
          </form>
        </div>

        <div className="col-md-7">
          <h4>results</h4>
          <hr />
          {
            (query === "") && <div className="alert alert-info">Search a heroe </div>
          }
          {
            (query !== "" && heroesFiltered.length === 0) && <div className="alert alert-danger">
              there is no a heroe with {query}
            </div>
          }

          {heroesFiltered.map((heroe) => (
            <HeroeCard key={heroe.id} {...heroe} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchScreen;
