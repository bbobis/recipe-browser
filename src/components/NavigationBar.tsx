import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCocktail, faUtensils } from '@fortawesome/free-solid-svg-icons';

const NavigationBar = () => (
  <div className="p-1 bg-teal-500 text-gray-100">
    <ul className="flex">
      <li className="flex items-center">
        <span className="fa-layers inline-block w-16">
          <FontAwesomeIcon icon={faCircle} size="3x" />
          <FontAwesomeIcon icon={faUtensils} size="sm" transform="up-9" />
          <FontAwesomeIcon icon={faCocktail} size="sm" transform="down-9" />
        </span>{' '}
        <span className="font-serif text-xl font-bold">Recipe Browser</span>
      </li>
      <li className="flex justify-center items-center w-20 h-20 font-semibold">
        Food
      </li>
      <li className="flex justify-center items-center w-20 h-20font-semibold">
        Cocktail
      </li>
    </ul>
  </div>
);
export default NavigationBar;
