import React from 'react';
import MealsPage from './components/meals/MealsPage';
import NavigationBar from './components/NavigationBar';

const App = () => (
  <div className="h-screen flex flex-col container mx-auto bg-gray-100 xl:rounded xl:py-2">
    <div className="flex flex-none content-center h-16 bg-teal-500 text-gray-100">
      <NavigationBar />
    </div>
    <div className="flex-1 overflow-scroll">
      <MealsPage />
    </div>
  </div>
);

export default App;
