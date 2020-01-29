import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => (
  <nav>
    <NavLink to='/'>Home</NavLink>
    <NavLink to='/recipes'>Recipes</NavLink>
    <NavLink to='/create-recipe'>Create Recipe</NavLink>
  </nav>
)

export default Nav
