import React from 'react';
import Api, { ICategory } from '../../api/fooddb/categories';
import CatalogItemCard from './CategoryCard';

type CategoryListState = {
  categories: ICategory[];
};

class CategoryList extends React.Component<{}, CategoryListState> {
  constructor(props: any) {
    super(props);
    this.state = { categories: [] };
  }

  componentDidMount() {
    Api.getCategories().then(resp => this.setState({ categories: resp }));
  }

  render() {
    return this.state.categories ? (
      <div className="flex justify-center flex-wrap px-3">
        {this.state.categories.map(category => (
          <div key={category.id} className="m-1">
            <CatalogItemCard
              label={category.label}
              thumbnail={category.thumbnail}
            />
          </div>
        ))}
      </div>
    ) : (
      <div>Loading...</div>
    );
  }
}

export default CategoryList;
