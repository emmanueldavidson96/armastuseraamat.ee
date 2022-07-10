import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Menu from '../Menus/Menu'
import './kontakt.css';
import { Link } from 'react-router-dom';

const Kontakt = () => {
  return (
    <div className='container-fluid'>
        <Header/>
        <nav className='row rowF'>
            <Link to="/" className='col-lg-3 column'>Avaleht</Link>
            <Link to="/kuidastellida" className='col-lg-3 column'>Kuidas tellida</Link>
            <Link to="/hinnad" className='col-lg-3 column'>Hinnad</Link>
            <Link to="/kontakt" className='col-lg-3 column'>Kontakt</Link>
        </nav>
        
        <div className='kontaktcouple row'>
            <div className='col-lg-5'>    
                <h2 className='kontaktheader'>Kontakt</h2>   
                <p className='information2'>+372 5697 1553</p>         
                <p className='information2'>Info@armastuseraamat.ee</p>
                <p className='information2'>S Gormify OU</p>
                <p className='information2'>Reg nr: 14932180</p>
                <img src="" alt="" className='' />
                <img src="" alt="" className=''/>
            </div>
            <div className='col-lg-7'>      
                <h2 className='kontaktheader'>Võta meiega ühendust</h2>
                <label className='information2' for="nimi">Nimi:*</label>
                <input className='kontaktinput' type="text" name="" value="" />
                <label className='information2' for="e-post">E-post:*</label>
                <input className='kontaktinput' type="text" name="" value="" />
                <label for="sonum" className='information2'>Sonum:*</label>
                <textarea className='kontaktRepot' ></textarea> 
                <input className='submit' type="button" name="" value="Saada"/>         
            </div>            
        </div>
        <Footer/>
    </div>
  )
}

export default Kontakt