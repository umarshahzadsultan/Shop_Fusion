import React from 'react'
import Productdetail from './productdetail'
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { AiOutlineEye } from 'react-icons/ai';
import './product.css'

const Product = ({product, setProduct, detail, view}) => {
    
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
    <div className='product_detail'>
                <div className='container'>
                    {
                        detail.map((curElm) =>
                        {
                            return(
                                <div className='productbox'>
                                    <div className='img-box'>
                                    <img src={curElm.Img} alt={curElm.Title}></img>
                                    </div>

                                    <div className='detail'>
                                        <h4>{curElm.Cat}</h4>
                                        <h2>{curElm.Title}</h2>
                                        <p>A Screen Everyone Will Love: Whether your</p>
                                        <h3>{curElm.Price}</h3>
                                        <button>Add To Cart</button>

                                    </div>
                                    
                                  </div>

                            )

                        })
                    }
                    <div className='productbox'>

                    </div>

                </div>
    </div>

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
                    <li onClick={() => filterproduct ("Headphone")}>Headphones</li>
                    <li onClick={() => filterproduct ("Computer")}>Computer</li>
                    <li onClick={() => filterproduct ("Laptop")}>Laptop</li>
                    <li onClick={() => filterproduct ("Speakers")}>Speakers</li>
                    <li onClick={() => filterproduct ("Lcd")}>Lcd</li>
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
                                                    <li onClick={() => view(curElm)}><AiOutlineEye /></li>  
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