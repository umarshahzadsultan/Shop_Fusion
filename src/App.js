import React, {useState} from 'react'
import Nav from './nav'
import Rout from './rout';
import Footer from './footer';
import Productdetail from './productdetail';

import {BrowserRouter} from 'react-router-dom';


function App() {
  //product detail
  const [detail, setDetail] = useState([])
  //filter Product
  const [product, setProduct] = useState(Productdetail)
  const searchbtn = (product) =>
  {
      const change = Productdetail.filter((x) =>
      {
        return x.Cat === product
        
      })
      setProduct(change)

    
  }

  const view = (product) =>
  {
    setDetail([{product}])
  }
  return (
   <>

   <BrowserRouter>
   <Nav searchbtn={searchbtn} />
   
   <Rout product={product} setProduct={setProduct} detail={detail} view={view} />

   <Footer />
   </BrowserRouter>
   
   </>
  )
}

export default App