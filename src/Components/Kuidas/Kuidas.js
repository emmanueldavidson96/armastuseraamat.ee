import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Menu from '../Menus/Menu'
import './kuidas.css';

const Kuidas = () => {
  return (
    <div >
        <Header/>
        <Menu/>
        <div className='mainKuidas container-fluid'>
            <h2 className='howToMainText'>Kuidas tellida</h2>
            <p className='howtoparagraph'>Sama lihtne kui 123</p>
            <ul className='listedInstructions'>
                <li className='listItem'>Loo enda ja partneri karakter</li>
                <li className='listItem'>Muuda raamatus tekste ning lisa juurde enda personaalne tekst mõnest 
                    sündmusest ja lisa juurde soovi korral partnerile mingi sõnum, 
                    mida talle öelda soovid.
                </li>
                <li className='listItem'>Meie paneme kokku vastavalt sinu loodud mustandile päris raamatu, trükime 
                    elle ära ja tarnime sinu poolt tellitud postiautomaati.
                </li>
            </ul>
            
        </div>
        <Footer/>
    </div>
  )
}

export default Kuidas