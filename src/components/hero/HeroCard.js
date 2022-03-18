import React from "react";
import { Link } from "react-router-dom";

export const HeroCard = ({
  id,
  superhero,
  publisher,
  alter_ego,
  first_appearance,
  characters,
}) => {
  const imagePath = `/assets/${id}.jpg`;

  return (
    <>
      <div className="col-span-1 flex flex-col bg-white border-1 p-2 rounded shadow">
        <img
          src={imagePath}
          alt={superhero}
          className="w-full h-100 rounded-t"
        />
        <h2 className="mt-2 mb-2 font-bold text-2xl">{superhero}</h2>

        <div className="mb-4 flex flex-wrap">
          <span className="mr-2">{alter_ego}</span>
        </div>
        <p className="text-md text-justify">
          {alter_ego !== characters && <span>{characters}</span>}
        </p>
        <div className="flex flex-wrap mt-auto pt-3 text-sm">
          <p className="mr-2 mb-2 text-cyan-700 bg-blue w-10 h-10">
            <Link to={`/hero/${id}`}>More...</Link>
          </p>
        </div>
      </div>
    </>
  );
};
