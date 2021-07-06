import { useEffect, useState } from 'react';
import './App.css';


function App() {
  const appId = process.env.REACT_APP_APP_ID;;
  const appKey = process.env.REACT_APP_API_KEY;;

  const recipes

  useEffect(() => {
    getRecipes();
  });

  const getRecipes = () => {
    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=salmon&app_id=${appId}&app_key=${appKey}`)
      .then(response => response.json())
      .then(data => console.log(data.hits));
  }

  return (
    <div className="App">
      <form className="search-form">
        <input type="text" className="search-bar"/>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
    </div>
  );
};

export default App;
