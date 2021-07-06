import { useEffect, useState } from 'react';
import './App.css';
import Recipe from './components/Recipe'


function App() {
  const appId = process.env.REACT_APP_APP_ID;;
  const appKey = process.env.REACT_APP_API_KEY;;

  const [recipes, setRecipes] = useState([]);
  
  useEffect(() => {
    getRecipes();
  });

  const getRecipes = () => {
    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=salmon&app_id=${appId}&app_key=${appKey}`)
      .then(response => response.json())
      .then(data => setRecipes(data.hits));
  }

  return (
    <div className="App">
      <form className="search-form">
        <input type="text" className="search-bar"/>
        <button type="submit" className="search-button">
          Search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image}/>
      ))}
    </div>
  );
};

export default App;
