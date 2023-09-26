import React, {useState} from 'react'
import Nav from './nav'
import Rout from './rout';
import Footer from './footer';
import Productdetail from './productdetail';

import {BrowserRouter} from 'react-router-dom';


function App() {
  const [product, setProduct] = useState(Productdetail)
  const searchbtn = (product) =>
  {
      const change = Productdetail.filter((x) =>
      {
        return x.Cat === product
      })
      setProduct(change)
  }
  return (
   <>

   <BrowserRouter>
   <Nav searchbtn={searchbtn} />
   
   <Rout product={product} setProduct={setProduct} />

   <Footer />
   </BrowserRouter>
   
   </>
  )
}

export default App