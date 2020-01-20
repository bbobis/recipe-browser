import React, { FunctionComponent } from 'react';
import { Router } from '@reach/router';
import MealList from './MealList';
import MealDetails from './MealDetails';

const MealsPage: FunctionComponent = () => (
  <Router basepath="/meals">
    <MealList path="/" />
    <MealDetails path="/:id" />
  </Router>
);

export default MealsPage;
