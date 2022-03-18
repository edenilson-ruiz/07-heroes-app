import React, { useMemo } from "react";
import { HeroCard } from "./HeroCard";
import { getHeroesByPublisher } from "../../selectors/getHeroesByPublisher";

export const HeroList = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);

  return (
    <div class="container mx-auto p-6 grid grid-cols-1 md:grid-cols-6 gap-4">
        {heroes.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
    </div>
  );
};
