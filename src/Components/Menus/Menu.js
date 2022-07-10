import React from 'react'
import './menus.css'
import { Link } from 'react-router-dom'
const Menu = () => {
  return (
    <div className='container-fluid menus'>
        <nav className='row rowF'>
            <Link to="/" className='col-lg-3 column'>Avaleht</Link>
            <Link to="/kuidastellida" className='col-lg-3 column'>Kuidas tellida</Link>
            <Link to="/hinnad" className='col-lg-3 column'>Hinnad</Link>
            <Link to="/kontakt" className='col-lg-3 column'>Kontakt</Link>
        </nav>
        <div className='row herosection'>
          <div className='col-lg-5 toInform'>
            <h2 className='informThem'>Kirjuta enda Armastuse Raamat</h2>
            <input type="button" className='btnBanner' name="" value="Sinu armastuse raamat" />
          </div>
          <div className='col-lg-7'>
          </div>
        </div>
    </div>
  )
}

export default Menu