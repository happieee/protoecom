import React, { useContext } from 'react'
import  "./Product.css"
import {useStateValue} from "./StateProvider"
function Product({id,title,image,price}) {
  const[{basket}, dispatch]= useStateValue()
  const addToBasket = ()=>{
      dispatch({
        type: 'ADD_TO_BASKET',
        item:{
          id: id,              //You can als just pass the parameters as it is like
          title:title,          //id
          image: image,        //title
          price:price
        }                       //image
      })                        //instead of id:id title:title which is a cool feature  
  }
  return (
    <div className='product'>
    <div className='productInfo'> 
        <p>{title}</p>
        <p className= 'productprice'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
    </div>
    <img src= {image} alt=""></img>
    <button onClick={addToBasket}>Add to Basket </button>
    </div>

  )
}

export default Product