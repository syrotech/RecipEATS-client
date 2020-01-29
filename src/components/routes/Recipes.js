import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import Layout from '../shared/Layout'

const Recipes = props => {
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    axios(`${apiUrl}/recipes`)
      .then(res => setRecipes(res.data.recipes))
      .catch(console.error)
  }, [])

  const recipesJsx = recipes.map(recipe => (
    <li key={recipe.id}>
      <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
    </li>
  ))

  return (
    <Layout>
      <h4>Recipes</h4>
      <ul>
        {recipesJsx}
      </ul>
    </Layout>
  )
}

export default Recipes
