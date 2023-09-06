import React from 'react'
import { FaTruck } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiShoppingBag } from 'react-icons/fi';
import { AiOutlineUser } from 'react-icons/ai';
import { CiLogin } from 'react-icons/ci';
import { CiLogout } from 'react-icons/ci';
import './nav.css'

import { Link } from 'react-router-dom';

const Nav = () => {
  return (
<>
<div className='free'>

    <div className='icon'>
    <FaTruck />
    </div>
    <p>Free Shipping when shopping upto Rs:10000 </p>
</div>
<div className='main_header'>
    <div className='container'>
        <div className='logo'>
        <img src='./images/logo2.jpg' alt='logo'></img>
        </div>
        <div className='search_box'>
            <input type='text' value='' placeholder='Enter The Product Name' autoComplete='off'></input>
            <button>Search</button>
        </div>

        <div  className='icon2'>
            <div className='account'>
                <div className='user_icon'>
                <AiOutlineUser/>
                </div>
                 <p>Hello, user</p>
            </div>

            <div className='second_icon'>
                <Link to="/favourite" className='link'><AiOutlineHeart /> </Link>
                <Link to="/cart" className='link'><FiShoppingBag /> </Link>

            </div>
          

        </div>

    </div>

</div>
<div className='header'>
    <div className='container'>
        <div className='nav'>
        <ul>
            <li>
                <Link to='/home' className='link'>Home</Link>
            </li>
            <li>
                <Link to='/product' className='link'>Product</Link>
            </li>
            <li>
                <Link to='/about' className='link'>About</Link>
            </li>
            <li>
                <Link to='/contact' className='link'>Contact</Link>
            </li>
        </ul>
        </div>
   
        <div className='auth'>
            <button><CiLogin/></button>
            <button><CiLogout/></button>
            
            
        </div>
    </div>
</div>
</>
  )
}

export default Nav
