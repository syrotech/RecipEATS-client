// 1. Add hooks from beginning: for 'GET' and 'DELETE' Recipe
// 2. Import `useState` and `useEffect` instead of `component`
import React, { useState, useEffect } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import Layout from '../shared/Layout'

// 3. Make recipe into a functional component
// 4. Replace `constructor`, `super`, and `this.state` with hook
// 5. Make hook for `delete`
const Recipe = (props) => {
  const [recipe, setRecipe] = useState(null)
  const [deleted, setDeleted] = useState(false)

  // 6. Replace `componentDidMount` and replace with `useEffect` imported above
  // 7. change `setState` to `setRecipe` and take out `this` in api url
  useEffect(() => {
    axios(`${apiUrl}/recipes/${props.match.params.id}`)
      .then(res => setRecipe(res.data.recipe))
      .catch(console.error)
  }, [])

  // 8. `setState` to `setDeleted` and take out the `this` in api url
  const destroy = () => {
    axios({
      url: `${apiUrl}/recipes/${props.match.params.id}`,
      method: 'DELETE'
    })
      .then(() => setDeleted(true))
      .catch(console.error)
  }

  // 9. Do not add render
  // 10. If no recipe return loading
  if (!recipe) {
    return <p>Loading...</p>
  }
  // 11. If deleted, redirect (iported above) to `home` with success message
  if (deleted) {
    return <Redirect to={
      { pathname: '/', state: { msg: 'Recipe succesfully deleted!' } }
    } />
  }

  return (
    <Layout>
      <h4>{recipe.title}</h4>
      <p>Ingredients: {recipe.ingredients}</p>
      <p>Directions: {recipe.instructions}</p>
      <button onClick={destroy}>Delete Recipe</button>
      <Link to={`/recipes/${props.match.params.id}/edit`}>
        <button>Edit</button>
      </Link>
      <Link to="/recipes">Back to all recipes</Link>
    </Layout>
  )
}

export default Recipe
