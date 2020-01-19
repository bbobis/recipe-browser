import React, { FunctionComponent } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import MealCard from './MealCard';
import Api, { Meal } from '../../api/fooddb/meals';

type Prop = {
  category: string;
};

const MealList: FunctionComponent<Prop> = ({ category }) => {
  const [mealIds, setMealIds] = React.useState<number[]>([]);
  const [currentMealId, setCurrentMealId] = React.useState<
    number | undefined
  >();
  const [currentMeal, setCurrentMeal] = React.useState<Meal | null>(null);

  // Fetch meals for category
  React.useEffect(() => {
    Api.getMeals(category).then(listOfMeals => {
      if (listOfMeals.length) {
        setMealIds(listOfMeals.map(m => m.id));
        setCurrentMealId(listOfMeals[0].id);
      }
    });
  }, [category]);

  React.useEffect(() => {
    // Fetch the a meal
    if (currentMealId) {
      Api.getMeals(currentMealId).then(meal => setCurrentMeal(meal));
    }
  }, [currentMealId]);

  const previousMealHandler = (): void => {
    if (currentMealId) {
      const indexOfCurrentMealId = mealIds.indexOf(currentMealId);
      if (indexOfCurrentMealId) {
        setCurrentMealId(mealIds[indexOfCurrentMealId - 1]);
      }
    }
  };

  const nextMealHandler = (): void => {
    if (currentMealId) {
      const indexOfCurrentMealId = mealIds.indexOf(currentMealId);
      if (indexOfCurrentMealId < mealIds.length - 1) {
        setCurrentMealId(mealIds[indexOfCurrentMealId + 1]);
      }
    }
  };

  return (
    <div className="flex">
      <div className="flex flex-none items-center px-5">
        <button className="outline-none" onClick={previousMealHandler}>
          <FontAwesomeIcon icon={faChevronLeft} size="4x" />
        </button>
      </div>
      <div className="flex-1">
        {currentMeal ? (
          <MealCard name={currentMeal.name} thumbnail={currentMeal.thumbnail} />
        ) : null}
      </div>
      <div className="flex flex-none items-center px-5">
        <button className="ouline-none" onClick={nextMealHandler}>
          <FontAwesomeIcon icon={faChevronRight} size="4x" />
        </button>
      </div>
    </div>
  );
};

export default MealList;
