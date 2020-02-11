import React from 'react'
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

const Nav = () => (
  <nav>
    <NavLink style={linkStyle} to='/'>Home</NavLink>
    <NavLink style={linkStyle} to='/recipes'>Recipes</NavLink>
    <NavLink style={linkStyle} to='/create-recipe'>Create Recipe</NavLink>
    <hr style={hrStyle} />
  </nav>
)

export default Nav
