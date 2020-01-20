import React, { FunctionComponent } from 'react';
import MealCard from './MealCard';
import Api, { Meal } from '../../api/fooddb/meals';
import CategoryList from '../category/CategoryList';

const MealList: FunctionComponent<{}> = () => {
  const [category, setCategory] = React.useState('beef');
  const [meals, setMeals] = React.useState<Meal[]>([]);

  // Fetch meals for category
  React.useEffect(() => {
    Api.getMeals(category).then(listOfMeals => setMeals(listOfMeals));
  }, [category]);

  const handleCategoryClick = (category: string) => setCategory(category);

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-none py-2">
        <CategoryList onClickHandler={handleCategoryClick} />
      </div>
      <div className="flex-initial overflow-y-scroll">
        <div className="flex flex-wrap justify-center items-stretch content-between">
          {meals.length > 0
            ? meals.map(m => (
                <div key={m.id} className="flex-grow-1 p-1 lg:p-3 xl:p-3">
                  <MealCard {...m} />
                </div>
              ))
            : null}
        </div>
      </div>
    </div>
  );
};

export default MealList;
