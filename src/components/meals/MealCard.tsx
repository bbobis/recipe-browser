import React, { FunctionComponent } from 'react';
import { Meal } from '../../api/fooddb/meals';

type Prop = {
  [k: string]: any;
} & Meal;

const MealCard: FunctionComponent<Prop> = ({ name, thumbnail, tags }) => (
  <div className="max-w-sm rounded overflow-hidden shadow-xl h-full">
    <img className="w-full" src={thumbnail} alt={name} />
    <div className="px-4 py-2">
      <div className="font-bold text-lg mb-2">{name}</div>
    </div>
  </div>
);

export default MealCard;
