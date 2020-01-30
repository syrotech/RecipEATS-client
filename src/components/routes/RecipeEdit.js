import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import axios from 'axios'

import apiUrl from '../../apiConfig'
import MovieForm from '../shared/RecipeForm'
import Layout from '../shared/Layout'

import messages from '../AutoDismissAlert/messages'

const RecipeEdit = (props) => {
  const [recipe, setRecipe] = useState({ title: '', ingredients: '', instructions: '' })
  const [updated, setUpdated] = useState(false)

  useEffect(() => {
    axios({
      url: `${apiUrl}/recipes/${props.match.params.id}`,
      method: 'GET',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      }
    })
      .then(res => setRecipe(res.data.recipe))
      .catch(console.error)
  }, [])

  const handleChange = event => {
    event.persist()
    setRecipe({ ...recipe, [event.target.name]: event.target.value })
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(props)
    axios({
      url: `${apiUrl}/recipes/${props.match.params.id}`,
      method: 'PATCH',
      headers: {
        'Authorization': `Token token=${props.user.token}`
      },
      data: { recipe }
    })
      .then(() => setUpdated(true))
      .then(() => {
        console.log(props.alert)
        props.alert({
          heading: 'Updated your Recipe Success',
          message: messages.editSuccess,
          variant: 'success'
        })
      })
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
