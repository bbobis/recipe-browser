import { isApiResponse } from './utils';

interface ApiResponseMeals {
  meals: Array<{
    strMeal: string;
    strMealThumb: string;
    idMeal: string;
  }>;
}

export type Meal = {
  id: number;
  name: string;
  thumbnail: string;
};

const getMealsForCategory = async (category: string): Promise<Meal[]> => {
  const response: Response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  );

  if (response.ok) {
    const responseBody: unknown = await response.json();
    if (isApiResponse<ApiResponseMeals>(responseBody, 'meals')) {
      return responseBody.meals.map(m => ({
        id: Number(m.idMeal),
        name: m.strMeal,
        thumbnail: m.strMealThumb,
      }));
    }
  } else {
    console.log(
      `Something went wrong fetching meals for category of ${category}`
    );
  }

  return [];
};

export default {
  getMealsForCategory,
};
