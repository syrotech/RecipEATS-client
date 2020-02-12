import React, { Fragment } from 'react'
import { NavLink } from 'react-router-dom'

const linkStyle = {
  display: 'inline-block',
  width: '32%',
  'text-align': 'center',
  'margin-top': '1rem',
  'font-weight': 'bold'
}

const hrStyle = {
  border: '0',
  height: '1px',
  'background-image': 'linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0,0, 0.75), rgba(0, 0, 0, 0))'
}

const imgStyle = {
  'object-fit': 'fill',
  'max-height': '100%',
  width: '100%'
}

const authenticatedOptions = (
  <Fragment>
    <NavLink style={linkStyle} to='/'>Home</NavLink>
    <NavLink style={linkStyle} to='/recipes'>Recipes</NavLink>
    <NavLink style={linkStyle} to='/create-recipe'>Create Recipe</NavLink>
    <hr style={hrStyle} />
  </Fragment>
)

const unauthenticatedOptions = (
  <Fragment>
    <img style={imgStyle} src='recipeats-bg-img.jpg'/>
  </Fragment>
)

const Nav = ({ user }) => (
  <nav>
    { user ? authenticatedOptions : unauthenticatedOptions }
  </nav>
)

export default Nav
