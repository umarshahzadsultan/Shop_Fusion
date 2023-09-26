import React from 'react'
import Productdetail from './productdetail'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineEye } from 'react-icons/ai';
import './product.css'

const Product = ({product, setProduct}) => {
    
    const filterproduct = (product) =>
    {
        const update = Productdetail.filter((x) =>
        {
            return x.Cat === product;
        })
        setProduct(update);
    }
    const AllProducts = () =>
    {
        setProduct(Productdetail)
    }
  return (
    <>
    
    <div className='products'>
    <h3> # Product </h3>
    <p>Home . products</p>
        <div className='container'>
            <div className='filter'>
                <div className='categories'>
                    <h3>categories</h3>
                <ul>
                    <li onClick={() => AllProducts ()}>All Products</li>
                    <li onClick={() => filterproduct ("Tablet")}>Tablet</li>
                    <li onClick={() => filterproduct ("Watch")}>Watch</li>
                    <li onClick={() => filterproduct ("Mobile")}>Mobile</li>
                    <li onClick={() => filterproduct ("Headphones")}>Headphones</li>
                    <li onClick={() => filterproduct ("Computer")}>Computer</li>
                    <li onClick={() => filterproduct ("Laptop")}>Laptop</li>
                    <li onClick={() => filterproduct ("Speakers")}>Speakers</li>
                    <li onClick={() => filterproduct ("Smartled")}>Smartled</li>
                </ul>

                </div>
                    
            </div>
            <div className='productbox'>
                        <div className='contant'>
                            {
                                product.map((curElm) =>
                                {
                                    return(
                                        <>
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

                                        
                                        </>
                                    )                    
                                })
                                
                            }

                        </div>

                    </div>
        </div>

    </div>
    </>
  )
}

export default Product