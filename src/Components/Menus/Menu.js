import React from 'react'
import './menus.css'
import { Link } from 'react-router-dom'
const Menu = () => {
  return (
    <div className='container-fluid menus'>
        <nav className='rowF'>
            <Link to="/" className='column'>Avaleht</Link>
            <Link to="/kuidastellida" className='column'>Kuidas tellida</Link>
            <Link to="/hinnad" className='column'>Hinnad</Link>
            <Link to="/kontakt" className='column'>Kontakt</Link>
            <Link to="/muugitingimused" className='column'>Müügitingimused</Link>
        </nav>
    </div>
  )
}

export default Menu