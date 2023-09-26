import React from 'react'
import { BsFacebook } from 'react-icons/bs';
import { BsInstagram } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
import { BsYoutube } from 'react-icons/bs';


import './footer.css'

const Footer = () => {
  return (
    <>
    <div className='footer'>
        <div className='container'>
            <div className='logo'>
                <img src='./images/logo2.jpg' alt='logo'></img>
            </div>
                <div className='detail'>
                <p> We are online Shop to provide you your favourite ietms at your door steps</p>
                <div className='icon'>
                  <li><BsFacebook /></li>
                  <li><BsInstagram /></li>
                  <li><BsTwitter /></li>
                  <li><BsYoutube /></li>

                  
                </div>
                </div>
                <div className='account'>
                  <h3>My Account</h3>
                  <ul>
                    <li>Account</li>
                    <li>Order</li>
                    <li>Shipping</li>
                    <li>Return</li>
                  </ul>

                </div>
<div className='page'>
  <h3>Pages</h3>
  <ul>
    <li>Home</li>
    <li>About</li>
    <li>Contact</li>
    <li>Terms & Conditions</li>
  </ul>

</div>
        </div>

    </div>
    </>
  )
}

export default Footer