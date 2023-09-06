import React from 'react'
import { FaTruck } from 'react-icons/fa';
import './nav.css'

const Nav = () => {
  return (
<>
<div className='free'>
<img src='./images/logo2.jpg' alt='logo'></img>
    <div className='icon'>
    <FaTruck />
    </div>
    <p>Free Shipping when shopping upto Rs:10000 </p>
</div>
<div className='main_header'>
    <div className='container'>
        <div className='logo'>
        </div>
        <div className='search_box'>
            <input type='text' value='' placeholder='Enter The Product Name' autoComplete='off'></input>
            <button>Search</button>
        </div>

    </div>

</div>
</>
  )
}

export default Nav
