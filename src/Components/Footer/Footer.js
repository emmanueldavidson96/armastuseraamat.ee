import React from 'react'
import './footer.css';
import facebook from '../../assets/facebook.png';
import instagram from '../../assets/instagram.png';

const Footer = () => {
  return (
    <div className='footerRegion'>
        <hr className='horizontalLine'/>
        <div className='footer'>
        <p className='footeritems'>Kontakt </p>
        <p className='footeritems'>|</p>
        <p className='footeritems'>Kuidas tellida</p>
        <p className='footeritems'>|</p>
        <p className="footeritems">Müügitingimused</p>
    </div>
    <div className='socials'>
            <h3>JÄLGI MEID</h3>
            <div>
            <img src={facebook} className="social-icons" />
            <img src={instagram} className="social-icons" />
            </div>
    </div>
        
    </div>
    
  )
}

export default Footer