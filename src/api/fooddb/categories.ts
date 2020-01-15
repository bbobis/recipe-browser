type CategoryResponse = {
  readonly idCategory: string;
  readonly strCategory: string;
  readonly strCategoryThumb: string;
  readonly strCategoryDescription: string;
};
type CategoriesResponse = {
  readonly categories: CategoryResponse[];
};
export type Category = {
  id: number;
  label: string;
  thumbnail: string;
  description: string;
};

const getCategories = async (): Promise<Category[]> => {
  const response: Response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/categories.php'
  );

  if (!response.ok) {
    console.log('Something went wrong fetching list of categories...');
    return [];
  }

  return ((await response.json()) as CategoriesResponse).categories.map(
    c =>
      ({
        id: Number(c.idCategory),
        label: c.strCategory,
        thumbnail: c.strCategoryThumb,
        description: c.strCategoryDescription,
      } as Category)
  );
};

export default {
  getCategories,
};
