import React from 'react'
import './footer.css';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className='footerRegion'>
        <hr className='horizontalLine'/>
        <div className='footer'>
        <p className='footeritems'>Kontakt </p>
        <p className='footeritems'>|</p>
        <p className='footeritems'>Kuidas tellida</p>
        <p className='footeritems'>|</p>
        <p className="footeritems"><Link to="/muugitingimused" className='setStyle'>Müügitingimused</Link></p>
    </div>
    <div className='socials'>
            <h3>JÄLGI MEID</h3>
            <div>
            <img src={facebook} className="social-icons" />
            <img src={instagram} className="social-icons" />
            </div>
            <div className='copyright'>
              <h4>Copyright© 2022 Armastuseraamat.ee </h4>
            </div>
    </div>
        
    </div>
    
  )
}

export default Footer