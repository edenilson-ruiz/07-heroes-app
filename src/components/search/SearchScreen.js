import React, { useMemo } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
import { getHeroesByName } from "../../selectors/getHeroesByName";
import { HeroCard } from "../hero/HeroCard";
import queryString from "query-string";

export const SearchScreen = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { q = "" } = queryString.parse(location.search);

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
      <div className="">
        <div className="flex flex-row mt-5 mr-5 mb-5 w-full">
          <div>
            <p className="flex font-bold ml-8 mr-5 mt-2">Search Form</p>
          </div>

          <div>
            <form onSubmit={handleSearch}>
              <input
                type="text"
                placeholder="Search a hero"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                name="searchText"
                autoComplete="off"
                value={searchText}
                onChange={handleInputChange}
              />
            </form>
          </div>
          <div className="">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2.5 ml-5 rounded"
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </div>
        <div className="col-span-3">
          <h4 className="text-xl font-bold mt-5 mb-2 ml-8">Resultados</h4>
          {q === "" ? (
            <div className="p-2.5 bg-cyan-300 text-lg ml-8 w-4/12 rounded">Search a hero</div>
          ) : (
            heroesFiltered.length === 0 && (
              <div className="p-2.5 bg-red-300 text-lg ml-8 w-4/12 rounded">
                No results for: <strong>{q}</strong>
              </div>
            )
          )}
          <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-6 gap-4 animate__animated animate__fadeIn">
            {heroesFiltered.map((hero) => (
              <HeroCard key={hero.id} {...hero} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
