import React, {useMemo} from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";
import queryString from "query-string";

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = '' } = queryString.parse(location.search);

  const initialForm = {
    searchText: q,
  };

  const [formValues, handleInputChange] = useForm(initialForm);

  const { searchText } = formValues;

  const heroesFiltered = useMemo(() => getHeroesByName(q), [q]);
  //const heroesFiltered = getHeroesByName(q);

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(`?q=${searchText}`);
  };

  return (
    <div>
      <h1>Search</h1>
      <hr />

      <div className="row">
        <div className="col-5">
          <h4>Search Form</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Search a hero"
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={handleInputChange}
            />

            <button type="submit" className="btn btn-outline-primary mt-1">
              Search
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Resultados</h4>
          <hr />
          {
            (q === '')
              ? <div className="alert alert-info">Search a hero</div>
              : ( heroesFiltered.length === 0 ) && <div className="alert alert-danger">No results for: <strong>{ q }</strong></div>
          }
          <div className="d-flex p-2">
            <div className="card-group">
              <div className="row row-cols-1 row-cols-md-2 animate__animated animate__fadeIn">
                {heroesFiltered.map((hero) => (
                  <HeroCard key={hero.id} {...hero} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
