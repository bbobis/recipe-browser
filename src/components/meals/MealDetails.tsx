import React, { FunctionComponent } from 'react';
import { RouteComponentProps } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';
import Api, { Meal } from '../../api/fooddb/meals';

type Prop = RouteComponentProps & {
  id?: string;
};

const MealDetails: FunctionComponent<Prop> = ({ id }) => {
  const [meal, setMeal] = React.useState<Meal | undefined>();

  React.useEffect(() => {
    if (id) {
      Api.getMeals(Number(id)).then(m => {
        setMeal(m);
        console.log(m.ingredients);
      }, console.error);
    }
  }, [id]);

  return meal ? (
    <div className="flex flex-col p-5">
      <div className="self-center">
        <iframe
          width="560"
          height="315"
          src={meal.youTubeURL}
          title={`youTube video of ${meal.name}`}
          frameBorder="0"
        ></iframe>
      </div>
      <br />
      <div className="flex-1 px-5">
        <p className="font-thin text-lg text-gray-600 uppercase border-b mb-2">
          Ingredients
        </p>
        <div className="px-5">
          {meal.ingredients.length ? (
            <ul className="flex flex-wrap text-sm text-justify">
              {meal.ingredients.map(({ ingredient, measurement }, idx) => (
                <li className="py-1 w-1/3" key={idx}>
                  <FontAwesomeIcon
                    icon={faPlusCircle}
                    className="text-gray-500"
                  />{' '}
                  {ingredient} ({measurement})
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
      <br />
      <div className="px-5">
        <p className="font-thin text-lg text-gray-600 uppercase border-b mb-2">
          Instructions
        </p>
        <div className="px-5">
          {meal.instructions.length ? (
            <ul className="list-decimal text-sm text-justify">
              {meal.instructions.map((text, idx) => (
                <li className="py-1" key={idx}>
                  {text}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  ) : null;
};

export default MealDetails;
