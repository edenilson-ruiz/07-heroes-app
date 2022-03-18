import React from 'react';
import { HeroList } from '../hero/HeroList';

export const MarvelScreen = () => {

  const publisher = 'Marvel Comics';

  return (
    <div>
        <h1 className="text-2xl font-bold mt-5 mb-5">Marvel Screen</h1>    
        <HeroList publisher={publisher} />
    </div>
  );
};
