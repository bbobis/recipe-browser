import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCocktail, faUtensils } from '@fortawesome/free-solid-svg-icons';

const NavigationBar = () => (
  <ul className="flex content-center h-auto">
    <li className="flex items-center">
      <span className="fa-layers inline-block w-16">
        <FontAwesomeIcon icon={faCircle} size="3x" />
        <FontAwesomeIcon icon={faUtensils} size="sm" transform="up-9" />
        <FontAwesomeIcon icon={faCocktail} size="sm" transform="down-9" />
      </span>{' '}
      <span className="font-serif text-xl font-bold">Recipe Browser</span>
    </li>
    <li className="flex justify-center items-center w-20 font-semibold">
      Food
    </li>
    <li className="flex justify-center items-center w-20 font-semibold">
      Cocktail
    </li>
  </ul>
);
export default NavigationBar;
