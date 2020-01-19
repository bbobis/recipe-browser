import React, { FunctionComponent } from 'react';
import CategoryList from './category/CategoryList';
import MealList from './meals/MealList';

const FoodPage: FunctionComponent = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('Beef');
  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <div className="h-full flex flex-col">
      <div className="flex-none py-2">
        <CategoryList selectCategoryHandler={handleSelectCategory} />
      </div>
      <div className="flex-initial overflow-y-scroll">
        <MealList category={selectedCategory} />
      </div>
    </div>
  );
};

export default FoodPage;
