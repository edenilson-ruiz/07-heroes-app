import React, { useMemo } from "react";
import { HeroCard } from "./HeroCard";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";

export const HeroList = ({ publisher }) => {  
  
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]) ;

  return (
    <div className="d-flex p-2">
      <div className="card-group">
        <div className="row row-cols-1 row-cols-md-6 g-3 animate__animated animate__fadeIn">
          {heroes.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </div>
  );
};
