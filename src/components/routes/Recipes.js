import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import Layout from '../shared/Layout'

import messages from '../AutoDismissAlert/messages'

const Recipes = props => {
  const [recipes, setRecipes] = useState([])
  // const { alert } = props

  useEffect(() => {
    axios({
      url: `${apiUrl}/recipes`,
      method: 'GET',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      }
    })
      .then(res => setRecipes(res.data.recipes))
      .then(() => {
        // console.log(props.alert)
        props.alert({
          heading: 'Index Recipes Success',
          message: messages.indexSuccess,
          variant: 'success'
        })
      })
      .catch((error) => {
        console.error(error)
        props.alert({
          heading: 'Index Recipes Failed',
          message: messages.indexFailure,
          variant: 'danger'
        })
      })
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
