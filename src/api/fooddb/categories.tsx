type CategoryResponse = {
  readonly idCategory: string;
  readonly strCategory: string;
  readonly strCategoryThumb: string;
  readonly strCategoryDescription: string;
};
type CategoriesResponse = {
  readonly categories: CategoryResponse[];
};
export interface ICategory {
  id: number;
  label: string;
  thumbnail: string;
  description: string;
}

async function getCategories(): Promise<ICategory[]> {
  const response: Response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/categories.php'
  );

  if (response.ok) {
    const responseObj = (await response.json()) as CategoriesResponse;
    return Promise.resolve(
      responseObj.categories.map(
        c =>
          ({
            id: Number(c.idCategory),
            label: c.strCategory,
            thumbnail: c.strCategoryThumb,
            description: c.strCategoryDescription,
          } as ICategory)
      )
    );
  } else {
    console.log('Something went wrong fetching list of categories...');
    return [];
  }
}

export default {
  getCategories,
};
