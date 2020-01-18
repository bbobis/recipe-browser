import { isApiResponse } from './utils';

interface ApiResponseCategories {
  categories: Array<{
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
  }>;
}

export type Category = {
  id: number;
  label: string;
  thumbnail: string;
  description: string;
};

const getCategories = async (): Promise<Category[]> => {
  const response = await fetch(
    'https://www.themealdb.com/api/json/v1/1/categories.php'
  );

  if (response.ok) {
    const responseBody: unknown = await response.json();
    if (isApiResponse<ApiResponseCategories>(responseBody, 'categories')) {
      return responseBody.categories.map(
        c =>
          ({
            id: Number(c.idCategory),
            label: c.strCategory,
            thumbnail: c.strCategoryThumb,
            description: c.strCategoryDescription,
          } as Category)
      );
    }
  } else {
    console.log('Something went wrong fetching list of categories...');
  }

  return [];
};

export default {
  getCategories,
};
