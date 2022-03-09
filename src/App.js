import logo from './logo.svg';
import react from 'react'
import './App.css';
import data from './DATA/data.js'
import Product from './product.js'



function App() {


  return (
  <>
  <Products/>
  </>
  )

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
