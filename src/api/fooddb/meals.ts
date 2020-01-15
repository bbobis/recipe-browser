type MealResponse = {
  strMeal: string;
  strMealThumb: string;
  idMeal: string;
};
type MealsResponse = {
  meals: MealResponse[];
};
export type Meal = {
  id: number;
  name: string;
  thumbnail: string;
};

const getMealsForCategory = async (category: string): Promise<Meal[]> => {
  const response: Response = await fetch(
    `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`
  );

  if (!response.ok) {
    console.log(
      `Something went wrong fetching meals for category of ${category}`
    );
    return [];
  }

  return ((await response.json()) as MealsResponse).meals.map(m => ({
    id: Number(m.idMeal),
    name: m.strMeal,
    thumbnail: m.strMealThumb,
  }));
};

export default {
  getMealsForCategory,
};
