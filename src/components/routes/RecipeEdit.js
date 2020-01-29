import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import MovieForm from '../shared/RecipeForm'
import Layout from '../shared/Layout'

const RecipeEdit = (props) => {
  const [recipe, setRecipe] = useState({ title: '', ingredients: '', instructions: '' })
  const [updated, setUpdated] = useState(false)

  useEffect(() => {
    axios(`${apiUrl}/recipes/${props.match.params.id}`)
      .then(res => setRecipe(res.data.recipe))
      .catch(console.error)
  }, [])

  const handleChange = event => {
    event.persist()
    setRecipe(movie => ({ ...recipe, [event.target.name]: event.target.value }))
  }

  const handleSubmit = event => {
    event.preventDefault()

    axios({
      url: `${apiUrl}/recipes/${props.match.params.id}`,
      method: 'PATCH',
      data: { recipe }
    })
      .then(() => setUpdated(true))
      .catch(console.error)
  }

  if (updated) {
    return <Redirect to={`/recipes/${props.match.params.id}`} />
  }

  return (
    <Layout>
      <MovieForm
        recipe={recipe}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        cancelPath={`/recipes/${props.match.params.id}`}
      />
    </Layout>
  )
}

export default RecipeEdit
