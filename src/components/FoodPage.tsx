import React, { FunctionComponent } from 'react';
import CategoryList from './category/CategoryList';
import MealList from './meals/MealList';

const FoodPage: FunctionComponent = () => {
  const [selectedCategory, setSelectedCategory] = React.useState('Beef');
  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  return (
    <>
      <div className="mt-20">
        <CategoryList selectCategoryHandler={handleSelectCategory} />
        <MealList category={selectedCategory} />
      </div>
    </>
  );
};

export default FoodPage;
