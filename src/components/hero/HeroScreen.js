import React, { useMemo } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { getHeroById } from "../../selectors/getHeroById";

export const HeroScreen = () => {
  const { heroId } = useParams();

  const hero = useMemo(() => getHeroById(heroId), [heroId]);
  // const hero = getHeroById(heroId);

  const navigate = useNavigate();

  const { id, superhero, publisher, alter_ego, first_appearance, characters } =
    hero;

  const imagePath = `/assets/${id}.jpg`;

  const handleReturn = () => {
    navigate(-1);
  };

  if (!hero) {
    return <Navigate to="/" />;
  }

  return (
    <div className="grid grid-cols-1 gap-4 mt-10 mr-6 p-3">
      <div className="">
        <img
          src={imagePath}
          alt={superhero}
          className="w-64 h-72 rounded-t animate__animated animate__fadeInLeft"
        />
      </div>
      <div className="animate__animated animate__fadeIn">
        <h2 className="mt-2 mb-2 font-bold text-2xl">{superhero}</h2>
        <div>
          <ul className="">
            <li className="">
              <b>Alter ego:</b> {alter_ego}
            </li>
            <li className="">
              <b>Publisher:</b> {publisher}
            </li>
            <li className="">
              <b>First Appearance:</b> {first_appearance}
            </li>
          </ul>
          <hr />
          <h5 className="mt-2 mb-2 font-bold">Characters</h5>
          <p>{characters}</p>
          <hr />
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold p-2.5 mt-10 rounded"
            onClick={handleReturn}
          >
            Regresar
          </button>
        </div>
      </div>
    </div>
  );
};
