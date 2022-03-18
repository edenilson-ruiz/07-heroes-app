import React, { useMemo } from "react";
import { HeroCard } from "./HeroCard";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div className="grid lg:grid-cols-5">
        {heroes.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
    </div>
  );
};
