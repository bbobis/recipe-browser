import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';
import Api, { Meal } from '../../api/fooddb/meals';

type Prop = RouteComponentProps & {
  id?: string;
};

const MealDetails: FunctionComponent<Prop> = ({ id }) => {
  const [meal, setMeal] = React.useState<Meal | undefined>();

  React.useEffect(() => {
    if (id) {
      Api.getMeals(Number(id)).then(m => setMeal(m), console.error);
    }
  }, [id]);

  return meal ? (
    <div className="h-screen flex flex-col p-5">
      <div className="self-center">
        <iframe
          width="560"
          height="315"
          src={meal.youTubeURL}
          title={`youTube video of ${meal.name}`}
          frameBorder="0"
        ></iframe>
      </div>
      <div className="flex flex-wrap">
        <div className="p-2 lg:w-1/2 xl:w-1/2">
          <p className="text-2xl text-gray-600 uppercase underline">
            {meal.name}
          </p>
          <p className="text-sm text-justify">{meal.instructions}</p>
        </div>
        <div className="p-2 lg:w-1/2 xl:w-1/2">
          <p className="text-2xl text-gray-600 uppercase underline">
            Ingredients
          </p>
        </div>
      </div>
    </div>
  ) : null;
};

export default MealDetails;
