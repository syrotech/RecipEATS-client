import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import RecipeForm from '../shared/RecipeForm'
import Layout from '../shared/Layout'

import messages from '../AutoDismissAlert/messages'

const RecipeCreate = (props) => {
  const [recipe, setRecipe] = useState({ title: '', ingredients: '', instructions: '' })
  const [createdRecipeId, setCreatedRecipeId] = useState(null)

  const handleChange = event => {
    event.persist()
    setRecipe(recipe => ({ ...recipe, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/recipes`,
      method: 'POST',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      },
      data: { recipe }
    })
      .then(res => setCreatedRecipeId(res.data.recipe.id))
      .then(() => {
        console.log(props.alert)
        props.alert({
          heading: 'You added a recipe! Success!',
          message: messages.createSuccess,
          variant: 'success'
        })
      })
      .catch((error) => {
        console.error(error)
        props.alert({
          heading: 'Failure! Recipes Failed',
          message: messages.createFailure,
          variant: 'danger'
        })
      })
  }

  if (createdRecipeId) {
    return <Redirect to={'/'} />
  }

  return (
    <Layout>
      <RecipeForm
        recipe={recipe}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath="/"
      />
    </Layout>
  )
}

export default RecipeCreate
