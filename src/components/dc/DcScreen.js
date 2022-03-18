import React from "react";
import { HeroList } from "../hero/HeroList";

export const DcScreen = () => {
  const publisher = "DC Comics";
  return (
    <div>
      <h1 className="text-2xl font-bold mt-5 mb-5 ml-10">DC Screen</h1>    
      <HeroList publisher={publisher} />
    </div>
  );
};
