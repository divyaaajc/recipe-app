import { useEffect, useState } from 'react';
import './App.css';
import Recipe from './components/Recipe'


function App() {
  const appId = process.env.REACT_APP_APP_ID;;
  const appKey = process.env.REACT_APP_API_KEY;;

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = () => {
    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${appId}&app_key=${appKey}`)
      .then(response => response.json())
      .then(data => setRecipes(data.hits));
  };

  const updateSearch = (event) => {
    setSearch(event.target.value);
  };

  const getQuery = (event) => {
    event.preventDefault();
    setQuery(search);
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={getQuery}>
        <input type="text" className="search-bar" value={search} onChange={updateSearch}/>
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
