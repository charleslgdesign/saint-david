import logo from './logo.svg';
import { react, useState } from 'react'
import './App.css';
import data from './DATA/data.js'
import Product from './product.js'



function App() {

  const [checkout, setCheckout] = useState([])

  
  return (
  <><Navbar/>
  <Products/>
  </>
  )

}



function Navbar() {

  const [showCheckout, setShowCheckout] = useState()
  return (
    <>
    <nav>
      <li>Products</li>
      <li onClick={()=>setShowCheckout(true)}>Checkout</li>
      </nav>
      {showCheckout?<Checkout/>:null}</>
  )

  function Checkout() {
    return (
    <div class='checkout'>
      <div class='button-container'>
      <button onClick={()=>setShowCheckout(false)}>hide</button>
      </div>
    </div>
    )
  }
}

function Products() {


  return (


  <div class='products-container'>
  {data.map((i)=>(
    <>
  <Product product={i} ></Product></>
))}
  </div>

)
  
}

export default App;
