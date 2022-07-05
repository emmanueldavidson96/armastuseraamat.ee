import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <div className='container-fluid row bannerRegion '>
        <div className='col-lg-5 clickRegion'>
            <h2 className='enda'>Kirjuta enda Armastuse Raamat</h2>
            <input type="button" className="btnBanner" value="Sinu armastuse raama" />
        </div>
        <div className='col-lg-7'>            
        </div>

    </div>
  )
}

export default Hero