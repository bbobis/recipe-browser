import React, { FunctionComponent } from 'react';
import MealCard from './MealCard';
import Api, { Meal } from '../../api/fooddb/meals';

type MealListProp = {
  category: string;
};

const MealList: FunctionComponent<MealListProp> = ({ category }) => {
  const [meals, setMeals] = React.useState<Meal[]>([]);

  // Fetch meals
  React.useEffect(() => {
    Api.getMealsForCategory(category).then(listOfMeals =>
      setMeals(listOfMeals)
    );
  }, [category]);

  return (
    <>
      <div className="flex flex-wrap">
        {meals.map(meal => (
          <MealCard key={meal.id} name={meal.name} thumbnail={meal.thumbnail} />
        ))}
      </div>
    </>
  );
};

export default MealList;
