import React from 'react';
import FoodPage from './components/FoodPage';
import NavigationBar from './components/NavigationBar';

const App = () => (
  <div className="h-screen p-2 bg-gray-100">
    <div className="h-screen container mx-auto bg-white rounded overflow-y-scroll">
      <NavigationBar />
      <FoodPage />
    </div>
  </div>
);

export default App;
