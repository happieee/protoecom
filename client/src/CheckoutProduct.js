import React from 'react'
import "./CheckoutProduct.css"
import { useStateValue } from './StateProvider'
function CheckoutProduct({id, title,image, price}) {
    const[{basket}, dispatch]= useStateValue()
    const removeFromBasket=()=>{
            dispatch({
                type: 'REMOVING_FROM_BASKET',
                id:id
            })
    }
  return (
    <div className='checoutprod'>
            <img className="checkprodimg"src={image} alt="" />
    <div className='checkprodinfo'>
        <p className='checkprodtitle'>{title}</p>
        <p className='checkprodprice'>
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <button onClickCapture={removeFromBasket} className='removbask'>Remove from Basket</button>
    </div>
    </div>
  )
}

export default CheckoutProduct