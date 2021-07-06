

const Recipe = ({title, calories, image}) => {
  return(
    <div className='recipe-container'>
      <h1>{title}</h1>
      <p>{calories}</p>
      <img src={image} alt="" />
    </div>
  )
}

export default Recipe
