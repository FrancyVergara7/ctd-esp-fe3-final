import React, { useReducer } from 'react'
import { routes } from '../routes'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [theme, toggleTheme] = useReducer(theme => !theme, false)

  const handleToggle = () => {
    toggleTheme()
    if (!theme) {
      document.body.classList.add('dark')
    } else {
      document.body.classList.remove('dark')
    }
  }

  return (
    <nav>
      <img src='./images/DH.png' alt='DH-logo' />
      <Link to={routes.home}>Home</Link>
      <Link to={routes.contact}>Contact</Link>
      <Link to={routes.favs}>Favorites</Link>
      <button onClick={handleToggle}>Cambiar Tema 🌙 </button>
    </nav>
  )
}

export default Navbar