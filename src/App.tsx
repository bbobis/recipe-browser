import React from 'react';
import CategoryList from './components/category/CategoryList';
import NavigationBar from './components/NavigationBar';

const App = () => (
  <div className="h-screen p-2 bg-gray-100">
    <div className="h-screen container mx-auto bg-white rounded overflow-hidden">
      <NavigationBar />
      <div className="py-20">
        <CategoryList />
      </div>
    </div>
  </div>
);

export default App;
