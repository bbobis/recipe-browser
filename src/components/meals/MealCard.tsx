import React, { FunctionComponent } from 'react';

type MealCardProp = {
  name: string;
  thumbnail: string;
};

const MealCard: FunctionComponent<MealCardProp> = ({ name, thumbnail }) => (
  <>
    <div className="border rounded text-center">
      <div
        className="w-32 h-32 bg-cover bg-center"
        style={{ backgroundImage: `url('${thumbnail}')` }}
      ></div>
      <div>{name}</div>
    </div>
  </>
);

export default MealCard;
