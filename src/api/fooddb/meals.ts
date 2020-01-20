import { isApiResponse } from './utils';

type UndefinedNullString = string | undefined | null;

interface ApiResponseMeals {
  meals: Array<
    {
      idMeal: string;
      strMeal: string;
      strMealThumb: string;
      strInstructions: string;
      strTags: UndefinedNullString;
      strYoutube: string;
    } & ApiResponseMealIngredients
  >;
}

interface ApiResponseMealIngredients {
  [k: string]: string;
  strIngredient1: string;
  strIngredient2: string;
  strIngredient3: string;
  strIngredient4: string;
  strIngredient5: string;
  strIngredient6: string;
  strIngredient7: string;
  strIngredient8: string;
  strIngredient9: string;
  strIngredient10: string;
  strIngredient11: string;
  strIngredient12: string;
  strIngredient13: string;
  strIngredient14: string;
  strIngredient15: string;
  strIngredient16: string;
  strIngredient17: string;
  strIngredient18: string;
  strIngredient19: string;
  strIngredient20: string;
  strMeasure1: string;
  strMeasure2: string;
  strMeasure3: string;
  strMeasure4: string;
  strMeasure5: string;
  strMeasure6: string;
  strMeasure7: string;
  strMeasure8: string;
  strMeasure9: string;
  strMeasure10: string;
  strMeasure11: string;
  strMeasure12: string;
  strMeasure13: string;
  strMeasure14: string;
  strMeasure15: string;
  strMeasure16: string;
  strMeasure17: string;
  strMeasure18: string;
  strMeasure19: string;
  strMeasure20: string;
}

interface Ingredient {
  ingredient: string;
  measurement: string;
}

export interface Meal {
  id: number;
  name: string;
  thumbnail: string;
  instructions: string[];
  tags: string[];
  youTubeURL: string;
  ingredients: Ingredient[];
}

function getMeals(category: string): Promise<Meal[]>;
function getMeals(mealId: number): Promise<Meal>;
async function getMeals(param: string | number): Promise<Meal[] | Meal> {
  let response: Response;

  if (typeof param === 'string') {
    response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${param}`
    );
  } else {
    response = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${param}`
    );
  }

  if (response.ok) {
    const responseBody: unknown = await response.json();
    if (isApiResponse<ApiResponseMeals>(responseBody, 'meals')) {
      const meals = responseBody.meals.map(m => ({
        id: Number(m.idMeal),
        name: m.strMeal,
        thumbnail: m.strMealThumb,
        instructions: extractInstructions(m.strInstructions),
        tags: extractTags(m.strTags),
        youTubeURL: makeEmbedable(m.strYoutube),
        ingredients: extractIngredients(m),
      }));

      if (meals.length) {
        if (typeof param === 'string') {
          return meals;
        } else {
          return meals[0];
        }
      }
    }
  } else {
    console.log(`Something went wrong fetching meals for parameter ${param}`);
  }

  return [];
}

const extractTags = (tags: UndefinedNullString) => {
  if (tags) {
    return tags.trim().split(',');
  }
  return [];
};

const extractIngredients = (meal: ApiResponseMealIngredients): Ingredient[] => {
  const ingredients: Ingredient[] = [];
  let counter = 1;
  while (counter <= 20) {
    const ingredient = meal[`strIngredient${counter}`];
    const measurement = meal[`strMeasure${counter}`];
    if (ingredient && measurement) {
      ingredients.push({
        ingredient,
        measurement,
      });
    }
    counter += 1;
  }

  return ingredients;
};

const extractInstructions = (instructions = '') => {
  return [...instructions.trim().split('\r\n')].filter(s => s.length);
};

const makeEmbedable = (youtubeURL: UndefinedNullString) => {
  if (youtubeURL) {
    return youtubeURL.replace('/watch?v=', '/embed/');
  }
  return '';
};

export default {
  getMeals,
};
