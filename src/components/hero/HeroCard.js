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

  const chars = characters.split(",");

  return (
    <div className="max-w-xs mx-4 mb-2 rounded-lg shadow-lg">
      <img className="w-full h-100 rounded-t-lg rounded-tr-lg" src={imagePath} alt="product" />
      <div className="px-6 py-4">
        <h4 className="mb-3 text-xl font-semibold tracking-tight text-gray-800">
          {superhero}
        </h4>
        <h3>{alter_ego}</h3>
      </div>
      <div className="px-6 py-4">
        <p className="leading-normal text-gray-700">
          {alter_ego !== characters && <span>{characters}</span>}
        </p>
      </div>
      <div className="px-6 py-4">Read more...</div>
    </div>
  );
};
