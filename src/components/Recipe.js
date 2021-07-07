import './Recipe.css';

const Recipe = ({title, ingredients, image}) => {
  return(
    <div className='recipe-card'>
      <img src={image} alt="" />
      <div className="info">
        <h3>{title}</h3>
        <p> Ingredients: </p>
        <ul>
          {ingredients.map((ingredient) => {
            return (
              <li>{ingredient.text}</li>
            );
          })}
        </ul>
      </div>
    </div>
  )
}

export default Recipe
