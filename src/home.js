import React from 'react'
import { HiArrowRight } from 'react-icons/hi';
import { BsTruck } from 'react-icons/bs';
import { BsCurrencyDollar } from 'react-icons/bs';
import { AiOutlinePercentage } from 'react-icons/ai';
import { BsHeadset } from 'react-icons/bs';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineEye } from 'react-icons/ai';




import Homeproduct from './homeproduct';

import { Link } from 'react-router-dom'
import './home.css'

const Home = () => {
  // const[homeProduct, setHomeProduct] = useState(Homeproduct)
  
  return (
<>
<div className='top_banner'>
    <div className='container'>
        <div className='detail'>
            <h2>The Best Iphone Collection</h2>
            <Link to='/product' className='link'>Shop Now<HiArrowRight/></Link>
        </div>
        <div className='img_box'>
          
          {/* <img src='./images/iphone3.jpg' alt='iphone3'></img>  */}
          <img src='./images/Apple-iPhone-11-PNG-Image.png' alt='sliderimg'></img> 
          {/* <img src='./images/iphone4.jpg' alt='iphone2'></img>  */}
          
        </div>

    </div>

</div>

<div className='product_type'>
  <div className='container'>
    <div className='box'>
      <div className='img_box'>
        <img src='./images/Mi-PNG-Isolated-HD.png' alt='mobile'></img>
      </div>
      <div className='detail'>
        <p>23 products</p>
      </div>
    </div>
    <div className='box'>
      <div className='img_box'>
        <img src='./images/headphones.png' alt='headphones'></img>
      </div>
      <div className='detail'>
        <p>40 products</p>
      </div>
    </div>
    <div className='box'>
      <div className='img_box'>
        <img src='./images/cpu.png' alt='cpu'></img>
      </div>
      <div className='detail'>
        <p>10 products</p>
      </div>
    </div>
    <div className='box'>
      <div className='img_box'>
        <img src='./images/smartwatch.png' alt='smartwatch'></img>
      </div>
      <div className='detail'>
        <p>15 products</p>
      </div>
    </div>
    <div className='box'>
      <div className='img_box'>
        <img src='./images/laptop.png' alt='laptop'></img>
      </div>
      <div className='detail'>
        <p>50 products</p>
      </div>
    </div>
    <div className='box'>
      <div className='img_box'>
        <img src='./images/speakers.png' alt='speakers'></img>
      </div>
      <div className='detail'>
        <p>23 products</p>
      </div>
    </div>
    <div className='box'>
      <div className='img_box'>
        <img src='./images/smartled.png' alt='smartled'></img>
      </div>
      <div className='detail'>
        <p>45 products</p>
      </div>
    </div>
  </div>
</div>
<div className='about'>
  <div className='container'>
    <div className='box'>
      <div className='icon'>
        <BsTruck />
      </div>  
      <div className='detail'>
        <h3>Free Shipping</h3>
        <p>Order above 10000</p>
      </div>
    </div>
    <div className='box'>
      <div className='icon'>
        <BsCurrencyDollar />
      </div>  
      <div className='detail'>
        <h3>Return & Refund</h3>
        <p>Money Back Guarantee</p>
      </div>
    </div>
    <div className='box'>
      <div className='icon'>
        <AiOutlinePercentage />
      </div>  
      <div className='detail'>
        <h3>Member Discount</h3>
        <p>On Every Order</p>
      </div>
    </div>
    <div className='box'>
      <div className='icon'>
        <BsHeadset />
      </div>  
      <div className='detail'>
        <h3>Customer Support</h3>
        <p>24 Hours 7 Days</p>
      </div>
    </div>
  </div>
</div>
<div className='product'>
  <h2>Top Product</h2>
  <div className='container'>
    {
      Homeproduct.map((curElm) =>
      {
        return(
          <div className='box' key={curElm.id}>
            <div className='img_box'>
              <img src={curElm.Img} alt={curElm.Title}></img>
              <div className='icon'>
                <li><AiOutlineShoppingCart /></li>
                <li><AiOutlineEye /></li>  
              </div>
            </div>
            <div className='detail'>
              <p>{curElm.Cat}</p>
              <h3>{curElm.Title}</h3> 
              <h4>{curElm.Price}</h4>

            </div>
          </div>
          

        )
      })
    }
   
  </div>
</div>
<div className='banner'>
  <div className='container'>
  <div className='detail'>
    <h4>LATEST TECHNOLOGY ADDED</h4>
    <h3>Apple iPad 10.2 9th Gen - 2023</h3>
    <p>Starting From Rs 150000</p>
    
  </div>
  <div className='slide'>
    <img className='slide_img' src='./images/ipad.png' alt='sliderimg'></img>
  </div>
  <div className='slide slide_two'>
  <img className='slide_img' src='./images/ipad2.png' alt='sliderimg'></img>
    
  </div>
  <div className='slide slide_three'>
  <img className='slide_img' src='./images/ipad1.png' alt='sliderimg'></img>
  </div>
  <div className='slide slide_four'>
    <img className='slide_img' src='./images/ipad3.png' alt='sliderimg'></img>
  </div>
 
  </div>
 
</div>
</>
  )
}

export default Home