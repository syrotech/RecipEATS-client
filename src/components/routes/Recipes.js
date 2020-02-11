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

  const styleImg = {
    width: 'inherit',
    height: '80%'
  }

  const styleCard = {
    border: '1px solid rgba(255,255,255,0)',
    'border-radius': '5%',
    margin: '0 10px',
    'margin-top': '10px',
    padding: '0px',
    'box-shadow': '0 0 5px grey',
    overflow: 'hidden'
  }

  const styleLink = {
    'margin-top': 'auto',
    'font-weight': 'bold',
    'font-size': '1em',
    display: 'block'
  }

  const recipesJsx = recipes.map(recipe => (

    <div className="col-lg-2 col-md-3 col-sm-4 col-xs-6 text-center" key={recipe.id} style={styleCard}>
      <img className="image-in-card" src={recipe.imageurl} style={styleImg}/>
      <Link style={styleLink} to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
    </div>

  ))

  return (
    <Layout>
      <h4>Recipes</h4>
      <div className="container">
        <div className="row">
          {recipesJsx}
        </div>
      </div>
    </Layout>
  )
}

export default Recipes
