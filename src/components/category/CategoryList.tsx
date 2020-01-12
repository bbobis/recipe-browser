import React, { FunctionComponent } from 'react';
import Api, { Category } from '../../api/fooddb/categories';
import CatalogItemCard from './CategoryCard';

type CategoryListProp = {
  selectCategoryHandler: (category: string) => void;
};

const CategoryList: FunctionComponent<CategoryListProp> = ({
  selectCategoryHandler,
}) => {
  const [categories, setCategories] = React.useState<Category[]>([]);

  // Fetch list of categories
  React.useEffect(() => {
    Api.getCategories().then(listOfCategories =>
      setCategories(listOfCategories)
    );
  }, []);

  return (
    <>
      <div className="flex justify-center flex-wrap px-3">
        {categories.map(category => (
          <div key={category.id} className="m-1">
            <CatalogItemCard
              label={category.label}
              thumbnail={category.thumbnail}
              onClick={selectCategoryHandler}
            />
          </div>
        ))}
      </div>
    </>
  );
};

export default CategoryList;
