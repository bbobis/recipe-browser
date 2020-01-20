import React, { FunctionComponent } from 'react';
import Api, { Category } from '../../api/fooddb/categories';
import CatalogItemCard from './CategoryCard';

type CategoryListProp = {
  onClickHandler: (category: string) => void;
};

const CategoryList: FunctionComponent<CategoryListProp> = ({
  onClickHandler,
}) => {
  const [categories, setCategories] = React.useState<Category[]>([]);

  // Fetch list of categories
  React.useEffect(() => {
    Api.getCategories().then(listOfCategories =>
      setCategories(listOfCategories)
    );
  }, []);

  return (
    <div className="h-full flex justify-center flex-wrap">
      {categories.map(category => (
        <div key={category.id} className="m-1">
          <CatalogItemCard
            label={category.label}
            thumbnail={category.thumbnail}
            onClick={onClickHandler}
          />
        </div>
      ))}
    </div>
  );
};

export default CategoryList;
