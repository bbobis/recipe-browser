import React from 'react';
import FoodPage from './components/FoodPage';
import NavigationBar from './components/NavigationBar';

const App = () => (
  <div className="h-screen flex flex-col container mx-auto bg-gray-100 overflow-hidden xl:rounded xl:py-2">
    <div className="flex flex-none content-center h-16 bg-teal-500 text-gray-100">
      <NavigationBar />
    </div>
    <div className="flex-initial overflow-hidden">
      <FoodPage />
    </div>
  </div>
);

export default App;
