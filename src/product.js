import { React, useState } from 'react'
import data from './DATA/data.js'



export default function Product(props) {
    const { product } = props

    const [productImage, setProductImage] = useState(product.image)
    const [flip, setFlip] = useState(true)

    const toggleSide = (e) => {

      if (flip === true) {
        setProductImage(product.bside)
      } else {
        setProductImage(product.image)
      }
    }

    

  return (

  

    <div>
      {/* {showProduct?<div>
        <img src={activeImage}/>
        <button onClick={()=>setShowProduct(!product)}>back</button></div>:null} */}
    <img class='product-image'  
    src={productImage} tag={product.id} id={product.id}
    onClick={(e)=>{setFlip(!flip);toggleSide(e)}}
    // onClick={(e)=>ShowProduct(e)}
    />
    <div class='label'>
      <button>add to cart</button>
    </div>
    </div>
  )
}

