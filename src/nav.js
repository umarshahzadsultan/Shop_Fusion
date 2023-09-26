import React, { useState } from 'react'
import { FaTruck } from 'react-icons/fa';
import { AiOutlineHeart } from 'react-icons/ai';
import { FiShoppingBag } from 'react-icons/fi';
import { AiOutlineUser } from 'react-icons/ai';
import { CiLogin } from 'react-icons/ci';
import { CiLogout } from 'react-icons/ci';
import { useAuth0 } from "@auth0/auth0-react";

import './nav.css'

import { Link } from 'react-router-dom';

// NavBar..........................
const Nav = ({searchbtn}) => {
    const [search, setSearch] = useState()
    const { loginWithRedirect, logout, user, isAuthenticated} = useAuth0();
    
    
  return (
<>
{/* Banner */}
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
        
            <input type='text' value={search} placeholder='Enter The Product Name' autoComplete='off' onChange={(e) => setSearch(e.target.value)}></input>
            <Link to={`/product`}>
            <button onClick={() => searchbtn (search)}>Search</button>
            </Link>
            
        </div>

{/* User Icon & Name */}
        <div  className='icon2'>
            {
                isAuthenticated &&
                (
                    <div className='account'>
                    <div className='user_icon'>
                    <AiOutlineUser/>
                    </div>
                     <p>Hello, {user.name} </p>
                </div>
                )
            }
          

{/* Heart & Cart Icon */}
            <div className='second_icon'>
                <Link to="/favourite" className='link'><AiOutlineHeart /> </Link>
                <Link to="/cart" className='link'><FiShoppingBag /> </Link>
            </div>
        </div>
    </div>
</div>

{/* Header */}
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
   {/* Login & Logout Buttons */}
        <div className='auth'>
            {
                isAuthenticated?
                <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}><CiLogout/></button>
                :
                <button onClick={() => loginWithRedirect()}><CiLogin/></button>

            }
            
            
            
        </div>
    </div>
</div>
</>
  )
}

export default Nav
