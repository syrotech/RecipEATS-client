import React from 'react'
import { Link } from 'react-router-dom'

const RecipeForm = ({ recipe, handleSubmit, handleChange, cancelPath }) => (
  <form onSubmit={handleSubmit}>
    <label>Title</label>
    <input
      placeholder="Recipe Name"
      value={recipe.title}
      name="title"
      onChange={handleChange}
    />

    <label>Time</label>
    <input
      placeholder="Time"
      value={recipe.time}
      name="time"
      onChange={handleChange}
    />

    <label>Servings</label>
    <input
      placeholder="Servings"
      value={recipe.servings}
      name="servings"
      onChange={handleChange}
    />

    <label>Ingredients</label>
    <input
      placeholder="Ingredients"
      value={recipe.ingredients}
      name="ingredients"
      onChange={handleChange}
    />

    <label>Instructions</label>
    <input
      placeholder="Instructions"
      value={recipe.instructions}
      name="instructions"
      onChange={handleChange}
    />

    <button type="submit">Submit</button>
    <Link to={cancelPath}>
      <button>Cancel</button>
    </Link>
  </form>
)

export default RecipeForm
