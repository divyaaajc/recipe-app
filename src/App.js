import { useEffect, useState } from 'react';
import './App.css';


function App() {

  const endpoint = `https://api.edamam.com/api/recipes/v2?type=public&q=${query}&app_id=${appId}&app_key=${appKey}`;

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    console.log('Effect has been run');
  });

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
