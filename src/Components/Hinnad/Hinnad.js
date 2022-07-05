import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Menu from '../Menus/Menu'
import './hinnad.css';


const Hinnad = () => {
  return (
    <div>
        <Header/>
        <Menu/>
        <div className='hinnadRegion container-fluid'>
            <h2 className='mainHeading'>LISAINFORMATSIOON</h2>
            <p className='information'>Raamatu suurus: 21x 15cm</p>
            <p className='information'>Raamatut on võimalik valida kaht eri tüüpi:</p>
            <ul>
                <li className='listprice'>Tugevad kaaned : price x *</li>
                <li className='listprice'>Pehmed kaaned: price xx*</li>
            </ul>
            <p className='this-info'>*Hinnale lisandub postikulu</p>
            <p className='information'>Raamatu tegemisel on kasutatud kvaliteetseid materjale, mis on loodud kestma just nagu Teie armulugu.</p>
            <input type="button" className='makePurchase' name="" value="Armastuse raamat" />
            
        </div>
        <Footer/>
    </div>
  )
}

export default Hinnad