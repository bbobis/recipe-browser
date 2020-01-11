import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCocktail, faUtensils } from '@fortawesome/free-solid-svg-icons';

const NavigationBar = () => (
  <div className="p-1">
    <ul className="flex">
      <li>
        <span className="fa-layers inline-block w-20 h-20">
          <FontAwesomeIcon
            icon={faCircle}
            size="4x"
            className="text-gray-600"
          />
          <FontAwesomeIcon icon={faUtensils} transform="up-9 left-2" />
          <FontAwesomeIcon icon={faCocktail} transform="down-9" />
        </span>
      </li>
      <li className="flex justify-center items-center w-20 h-20">Food</li>
      <li className="flex justify-center items-center w-20 h-20">Cocktail</li>
    </ul>
  </div>
);
export default NavigationBar;
