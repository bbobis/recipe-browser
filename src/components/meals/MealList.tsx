import React, { FunctionComponent } from 'react';
import MealCard from './MealCard';
import Api, { Meal } from '../../api/fooddb/meals';

type Prop = {
  category: string;
};

const MealList: FunctionComponent<Prop> = ({ category }) => {
  const [meals, setMeals] = React.useState<Meal[]>([]);

  // Fetch meals for category
  React.useEffect(() => {
    Api.getMeals(category).then(listOfMeals => setMeals(listOfMeals));
  }, [category]);

  return (
    <div className="flex flex-wrap justify-center items-stretch content-between">
      {meals.length > 0
        ? meals.map(m => (
            <div key={m.id} className="flex-grow-1 p-1 lg:p-3 xl:p-3">
              <MealCard {...m} />
            </div>
          ))
        : null}
    </div>
  );
};

export default MealList;
