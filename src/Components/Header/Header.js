import React from 'react'
import './header.css'
import logo from '../../assets/logo2.png';
import cart from '../../assets/cart.png';


const Header = () => {
  return (
    <div className='header container-fluid'>
        <img src={logo} alt="" className='logoImage'/>
        <h2 className='logoText'>Armastuseraamat</h2>
        <img src={cart} alt="" className='shoppingCart' />
    </div>
  )
}

export default Header